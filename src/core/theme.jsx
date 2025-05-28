import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#abbb34',
      light: '#63745c',
      dark: '#2c4f29',
      contrastText: '#000000',
    },
    secondary: {
      main: '#2c4f29',
      light: '#9fab7a',
      dark: '#63745c',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
    },
    customRed: {
      main: '#DD4124',
      light: 'rgba(221, 65, 36, 0.08)',
    },
    grey: { 
        ...createTheme().palette.grey,
        200: '#dee2ce'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 'bold',
      fontSize: '1.25rem',
      color: '#333333'
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#dee2ce',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          color: '#333333',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme: currentTheme }) => ({
          borderRadius: 8,
          textTransform: 'none',
          ...(ownerState.variant !== 'navSpecial' && ownerState.variant !== 'actionBlock' && {
            fontWeight: 500,
            fontSize: '1rem',
            padding: '8px 16px',
            color: 'inherit',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
              color: '#ffffff',
            },
          }),
        }),
        containedPrimary: {
          color: '#ffffff',
        }
      },
      variants: [
        {
          props: { variant: 'navSpecial' },
          style: ({ theme: currentTheme }) => ({ 
            fontWeight: 800,
            fontSize: '1rem',
            padding: '8px 16px',
            color: currentTheme.palette.customRed.main,
            border: `2px solid transparent`,
            '&:hover': {
              backgroundColor: currentTheme.palette.customRed.hoverBackground, 
              borderColor: currentTheme.palette.customRed.main, 
            },
          }),
        },
        {
          props: { variant: 'actionBlock' },
          style: ({ theme: currentTheme }) => ({ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 120,
            padding: currentTheme.spacing(2),
            color: currentTheme.palette.primary.main,
            borderColor: currentTheme.palette.primary.main,
            borderWidth: '2px',
            borderStyle: 'solid',
            fontWeight: 'bold',
            fontSize: '1rem',
            '&:hover': {
              color: currentTheme.palette.secondary.main,
              backgroundColor: currentTheme.palette.secondary.hoverBackground,
              borderColor: currentTheme.palette.secondary.main,
            },
            '& .MuiButton-startIcon': {
              margin: 0,
              marginBottom: currentTheme.spacing(0.5),
            },
          }),
        },
      ],
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          boxSizing: 'border-box',
          width: 250,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(5px)',
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        }
      }
    }
  }
});
