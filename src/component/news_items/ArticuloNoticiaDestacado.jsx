import React from 'react';
import { Paper, Typography, Grid, Box } from '@mui/material';

import imagenNoticia1 from '../../assets/imagen_noticia_1.jpg'; 
import imagenNoticia2 from '../../assets/imagen_noticia_2.jpg'; 
import imagenNoticia3 from '../../assets/imagen_noticia_3.jpg'; 

const textoNoticia = `
Valladolid, 3 de junio de 2025 — Representantes de la Agencia Estatal de Meteorología (AEMET), la Universidad de León, el Instituto Tecnológico Agrario de Castilla y León (ITACYL) y la Dirección General de Patrimonio Natural se han reunido este lunes para establecer las directrices técnicas de colaboración en materia de incendios forestales. La jornada de trabajo se ha desarrollado al amparo del programa RetechFOR, iniciativa estratégica de cooperación para la resiliencia forestal. 
Durante el encuentro, celebrado en un ambiente de cooperación y enfoque técnico, los participantes compartieron conocimientos, experiencias y propuestas orientadas a mejorar la respuesta frente a los incendios forestales, desde la prevención hasta la gestión operativa. La reunión ha permitido sentar las bases para un marco colaborativo que impulse el conocimiento aplicado y facilite la adopción de medidas adaptadas, eficaces y sostenibles. 
Con esta iniciativa, las instituciones implicadas refuerzan su compromiso con la protección del patrimonio natural mediante el aprovechamiento conjunto de capacidades científicas, tecnológicas y operativas. La colaboración interinstitucional se presenta como una herramienta clave para afrontar los desafíos que plantea la creciente amenaza de los incendios forestales en un contexto de cambio climático.
`;

const imagenes = [
  { src: imagenNoticia1, alt: 'Descripción de la imagen 1 de la noticia' },
  { src: imagenNoticia2, alt: 'Descripción de la imagen 2 de la noticia' },
  { src: imagenNoticia3, alt: 'Descripción de la imagen 3 de la noticia' },
];

function ArticuloNoticiaDestacado() {
  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        width: '100%',
        borderRadius: '12px', 
        mb: 4,
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
        Colaboración Interinstitucional para la Resiliencia Forestal
      </Typography>

      {textoNoticia.split('\n').map((parrafo, index) => (
        parrafo.trim() && (
          <Typography variant="body1" paragraph key={index} sx={{ textAlign: 'justify', lineHeight: 1.7 }}>
            {parrafo.trim()}
          </Typography>
        )
      ))}

      <Box sx={{ mt: 3 }}>
        <Grid container spacing={4} justifyContent="center">
          {imagenes.map((img, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ textAlign: 'center' }}>
              <Box
                component="img"
                src={img.src}
                alt={img.alt}
                sx={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  maxHeight: { xs: 200, sm: 250 },
                  objectFit: 'cover',
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
}

export default ArticuloNoticiaDestacado;
