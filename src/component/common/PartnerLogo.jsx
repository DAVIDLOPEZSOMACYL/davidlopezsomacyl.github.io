import React from 'react';
import { Paper, Tooltip, Box } from '@mui/material';

function PartnerLogo({ src, alt, href, width = 130, sx }) {
  let finalLogoSrc = src;

  if (src && !src.startsWith('http') && !src.startsWith('/')) { 
    try {
      finalLogoSrc = new URL(src, import.meta.url).href;
    } catch (error) {
      console.error(`Error al cargar el logo local '${src}':`, error);
      finalLogoSrc = `https://placehold.co/${width}x${Math.round(width * 0.6)}?text=Error`;
    }
  } else if (!src) {
    finalLogoSrc = `https://placehold.co/${width}x${Math.round(width * 0.6)}?text=No+Logo`;
  }


  const logoImage = (
    <Box
      component="img"
      src={finalLogoSrc}
      alt={alt}
      sx={{
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain',
      }}
    />
  );

  return (
    <Tooltip title={alt} placement="top" arrow>
      <Paper
        elevation={2}
        sx={{
          p: 1.5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 100,
          width: '100%',
          maxWidth: width + 30,
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: 4,
          },
          ...sx,
        }}
      >
        {href ? (
          <Box
            component="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visitar el sitio de ${alt}`}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: width,
              height: '100%', 
              textDecoration: 'none',
            }}
          >
            {logoImage}
          </Box>
        ) : (
          <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: width,
                height: '100%',
            }}
          >
            {logoImage}
          </Box>
        )}
      </Paper>
    </Tooltip>
  );
}

export default PartnerLogo;
