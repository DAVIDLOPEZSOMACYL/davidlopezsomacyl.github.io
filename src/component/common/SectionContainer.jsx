import React from 'react';
import { Container, Box, Typography } from '@mui/material';

/**
 * SectionContainer Component
 *
 * Un contenedor genérico para las secciones de la página.
 * Proporciona padding vertical y opcionalmente un título para la sección.
 *
 * @param {object} props - Las propiedades del componente.
 * @param {React.ReactNode} props.children - El contenido de la sección.
 * @param {string} [props.id] - Un ID opcional para la sección, útil para la navegación con anclas.
 * @param {string} [props.title] - Un título opcional que se mostrará al inicio de la sección.
 * @param {object} [props.sx] - Estilos personalizados para el Box exterior.
 * @param {string} [props.backgroundColor] - Color de fondo para la sección.
 * @param {boolean} [props.disableGutters] - Si es true, el container no tendrá padding horizontal.
 * @param {('xs'|'sm'|'md'|'lg'|'xl'|false)} [props.maxWidth='lg'] - Ancho máximo del contenedor.
 */
function SectionContainer({ children, id, title, sx, backgroundColor, disableGutters = false, maxWidth = 'lg' }) {
  return (
    <Box
      component="section" 
      id={id}
      sx={{
        py: { xs: 4, sm: 6, md: 8 }, 
        width: '100%',
        backgroundColor: backgroundColor || 'transparent', 
        ...sx, 
      }}
    >
      <Container maxWidth={maxWidth} disableGutters={disableGutters}>
        {/* Título opcional de la sección */}
        {title && (
          <Typography
            variant="h2"
            component="h2" 
            gutterBottom
            sx={{
              textAlign: 'center',
              mb: { xs: 3, sm: 4, md: 6 }, 
              fontWeight: 'bold',
              color: 'text.primary', 
            }}
          >
            {title}
          </Typography>
        )}
        {/* Contenido de la sección */}
        {children}
      </Container>
    </Box>
  );
}

export default SectionContainer;
