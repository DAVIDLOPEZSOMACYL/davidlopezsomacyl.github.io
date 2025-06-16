import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton, 
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/logo_1.png';

const navItemsDefinition = [
  { label: 'Inicio', href: '#home', type: 'scroll', pageTarget: 'main' },
  { label: 'Trámites', type: 'page', pageTarget: 'tramites' },
  { label: 'Noticias', type: 'page', pageTarget: 'news' },
  { label: 'Colaboran', href: '#consortium', type: 'scroll', pageTarget: 'main' }
];

function Header({ navSectionIds, navigateTo, currentPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavLinkClick = (event, item) => {
    if (item.type === 'page') {
      event.preventDefault();
      navigateTo(item.pageTarget);
    } else if (item.type === 'scroll') {
      event.preventDefault();
      if (currentPage !== item.pageTarget) {
        navigateTo(item.pageTarget);
        if (item.pageTarget === 'main' && item.href) {
            setTimeout(() => {
                const targetElement = document.querySelector(item.href);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 300);
        }
      } else {
        const targetElement = document.querySelector(item.href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const drawerContent = (
    <Box
      sx={{ width: 250, display: 'flex', flexDirection: 'column', height: '100%' }}
      role="presentation"
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={handleDrawerToggle} aria-label="Cerrar menú">
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItemsDefinition.map((item) => (
          <ListItem
            key={item.label}
            disablePadding 
          >
            <ListItemButton
              component="a"
              href={item.type === 'scroll' ? item.href : '#'}
              onClick={(e) => handleNavLinkClick(e, item)}
              selected={item.type === 'page' && currentPage === item.pageTarget}
              sx={{
                textAlign: 'center',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  color: item.label === 'Trámites'
                    ? (currentPage === 'tramites' ? theme.palette.primary.main : theme.palette.customRed?.main || '#DD4124')
                    : (item.type === 'page' && currentPage === item.pageTarget ? theme.palette.primary.main : 'inherit'),
                  fontWeight: (item.type === 'page' && currentPage === item.pageTarget) || (item.label === 'Trámites' && currentPage === 'tramites')
                    ? 'bold'
                    : 'normal',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: 'space-between', padding: { xs: '0 8px', sm: '0 16px' } }}>
          <Box
            component="a"
            href="#"
            onClick={(e) => {
                e.preventDefault();
                navigateTo('main');
                if (currentPage === 'main' && navSectionIds && navSectionIds.home) {
                    const targetElement = document.querySelector(`#${navSectionIds.home}`);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            }}
            sx={{
              display: 'inline-block',
              cursor: 'pointer',
              lineHeight: 0,
              height: { xs: 32, sm: 40 },
              '& img': {
                height: '100%',
                width: 'auto',
                objectFit: 'contain',
              },
            }}
          >
            <img src={logo} alt="Logo RetechFOR" />
          </Box>

          {isMobile ? (
            <IconButton color="inherit" aria-label="Abrir menú" edge="end" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {navItemsDefinition.map((item) => (
                <Button
                  key={item.label}
                  component="a"
                  href={item.type === 'scroll' ? item.href : '#'}
                  onClick={(e) => handleNavLinkClick(e, item)}
                  variant={item.label === 'Trámites' ? 'navSpecial' : undefined }
                  sx={{
                    fontWeight: (item.type === 'page' && currentPage === item.pageTarget && item.label !== 'Trámites') ? 700 :
                                (item.label === 'Trámites' ? undefined : 500),
                    ...(item.label === 'Trámites' && currentPage === 'tramites' && {
                        color: theme.palette.primary.main,
                        border: `2px solid ${theme.palette.primary.main}`,
                        '&:hover': {
                            backgroundColor: theme.palette.action.hover,
                            color: theme.palette.primary.dark,
                        }
                    }),
                    ...(item.type === 'page' && currentPage === item.pageTarget && item.label !== 'Trámites' && {
                        color: theme.palette.primary.main,
                    }),
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right" open={mobileOpen} onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

export default Header;
