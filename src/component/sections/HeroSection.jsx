import React from 'react';
import { Box, Button, Container } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import heroBackgroundImage from '../../assets/RetcheFOR_page-0001.png';

function HeroSection({ id }) {
  const handleScrollToProject = () => {
    const projectSection = document.getElementById('project');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id={id}
      component="section"
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
        backgroundImage: `url(${heroBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'common.white',
        textAlign: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 2,
          py: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          endIcon={<ArrowDownwardIcon />}
          onClick={handleScrollToProject}
          sx={{
            py: 1.5,
            px: 4,
            fontSize: { xs: '0.9rem', sm: '1rem' },
            color: 'white',
            '&:hover': {
              backgroundColor: 'primary.dark', 
            }
          }}
        >
          Saber más
        </Button>
      </Container>
    </Box>
  );
}

export default HeroSection;
