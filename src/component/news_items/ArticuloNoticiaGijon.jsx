import React from 'react';
import { Paper, Typography, Grid, Box } from '@mui/material';

import imagenNoticia1 from '../../assets/gijon1.jpeg';
import imagenNoticia2 from '../../assets/gijon2.jpeg';
import imagenNoticia3 from '../../assets/gijon3.jpeg';

const textoIntro = `
Gijón, 16 de junio de 2025 — En el marco del 9º Congreso Forestal Español (9CFE), que se celebra del 16 al 20 de junio en Gijón, la Junta de Castilla y León, presenta el proyecto a través de Somacyl, RetechFOR: es un programa dentro del Programa RETECH, que tiene como objetivo el monitoreo forestal y la reducción de desastres ambientales como palancas para el desarrollo de la bioeconomía forestal.  Este proyecto está financiado por la Unión Europea - Next Generation EU, dentro del Plan de Recuperación, Transformación y Resiliencia.
El stand institucional de la Junta acogerá varias sesiones informativas en las que se detallarán los objetivos, líneas de financiación y oportunidades que ofrece el programa RetechFOR, centrado en fomentar la digitalización, innovación y mejora tecnológica en el sector forestal.
Las presentaciones del proyecto se celebrarán en los siguientes horarios:
`;

const fechasPresentaciones = [
  'Lunes 16 de junio a las 17:30 h',
  'Martes 17 de junio a las 10:30 h',
  'Jueves 19 de junio a las 10:30 h y 17:30 h',
  'Viernes 20 de junio a las 10:30 h',
];

const textoFinal = `
El proyecto RetechFOR se enmarca dentro de la estrategia RETECH (Redes Territoriales de Especialización Tecnológica) impulsada por el Gobierno de España, con fondos del Mecanismo de Recuperación y Resiliencia de la Unión Europea, y tiene como objetivo reforzar las capacidades tecnológicas del sector forestal mediante el uso de nuevas herramientas, maquinaria avanzada y soluciones digitales.
Con esta participación en el 9CFE, la Junta de Castilla y León refuerza su compromiso con la sostenibilidad, la modernización del medio rural y la economía forestal, promoviendo un modelo más eficiente, competitivo y resiliente frente a los retos del cambio climático.
`;

const imagenes = [
  { src: imagenNoticia1, alt: 'Descripción de la imagen 1 de la noticia' },
  { src: imagenNoticia2, alt: 'Descripción de la imagen 2 de la noticia' },
  { src: imagenNoticia3, alt: 'Descripción de la imagen 3 de la noticia' },
];

function ArticuloNoticiaGijon() {
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
        La Junta de Castilla y León presenta el proyecto RetechFOR en el 9CFE de Gijón
      </Typography>

      {textoIntro.split('\n').map((parrafo, index) => (
        parrafo.trim() && (
          <Typography
            variant="body1"
            paragraph
            key={`intro-${index}`}
            sx={{ textAlign: 'justify', lineHeight: 1.7 }}
          >
            {parrafo.trim()}
          </Typography>
        )
      ))}

      <Box component="ul" sx={{ pl: 3, mb: 2 }}>
        {fechasPresentaciones.map((fecha, index) => (
          <li key={`fecha-${index}`}>
            <Typography variant="body1" component="span">{fecha}</Typography>
          </li>
        ))}
      </Box>

      {textoFinal.split('\n').map((parrafo, index) => (
        parrafo.trim() && (
          <Typography
            variant="body1"
            paragraph
            key={`final-${index}`}
            sx={{ textAlign: 'justify', lineHeight: 1.7 }}
          >
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

export default ArticuloNoticiaGijon;
