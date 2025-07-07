import React from 'react';
import { Paper, Typography, Grid, Box } from '@mui/material';

import imagenNoticia1 from '../../assets/WEBINAR.png';
import imagenNoticia2 from '../../assets/WEBINAR2.png';
import imagenNoticia3 from '../../assets/WEBINAR4.png';

const textoIntro = `
El pasado 3 de julio, la Federación de Asociaciones Empresariales de Burgos (FAE Burgos) solicitó presentación a sus asociados de las subvenciones que ofrece la Junta de Castilla y León a través del programa RetechFOR, una iniciativa enmarcada en el proyecto RETECH (Redes Territoriales de Especialización Tecnológica) del Gobierno de España, a las pueden optar:
`;

const lineasAyuda = [
  'Proyectos de emprendimiento digital y startups forestales en el ámbito de Castilla y León',
  'Digitalización y la transformación digital de las empresas de primera transformación de la madera y otros productos forestales.'
];

const textoFinal = `
Durante la reunión, celebrada a través de un webinar, el equipo técnico de RetechFOR (Junta de Castilla y León |SOMACYL), junto con Cesefor, desgranó las 2 líneas de ayuda anteriormente mencionadas, centradas en fomentar la transformación digital, la adopción de tecnologías avanzadas y el fortalecimiento de la competitividad e innovación en las pymes. Las ayudas están dirigidas a empresas y startups que quieran apostar por soluciones digitales, inteligencia artificial, automatización y o nuevos modelos de negocio tecnológicos.

La sesión contó con una notable participación de empresas burgalesas, que pudieron conocer de primera mano las características de cada convocatoria, los criterios de elegibilidad, plazos, procedimientos de solicitud, y resolver en directo sus dudas.

Esta colaboración con FAE Burgos refuerza el compromiso de RetechFOR por acercar las oportunidades de financiación a todos los colectivos del sector, promoviendo la cohesión y el desarrollo tecnológico del ecosistema empresarial forestal.

El proyecto RetechFOR se enmarca dentro de la estrategia RETECH (Redes Territoriales de Especialización Tecnológica) impulsada por el Gobierno de España, con fondos del Mecanismo de Recuperación y Resiliencia de la Unión Europea, y tiene como objetivo reforzar las capacidades tecnológicas del sector forestal mediante el uso de nuevas herramientas, maquinaria avanzada y soluciones digitales.
`;

const imagenes = [
  { src: imagenNoticia1, alt: 'Sesión informativa de RetechFOR en FAE Burgos' },
  { src: imagenNoticia2, alt: 'Presentación de las ayudas a empresas' },
  { src: imagenNoticia3, alt: 'Participantes en el webinar' },
];

function ArticuloReunion() {
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
        La Federación de Empresas de Burgos acoge una sesión informativa sobre las ayudas de RetechFOR dirigidas a impulsar la innovación y la digitalización empresarial 
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
        {lineasAyuda.map((linea, index) => (
          <li key={`linea-${index}`}>
            <Typography variant="body1" component="span">{linea}</Typography>
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

export default ArticuloReunion;