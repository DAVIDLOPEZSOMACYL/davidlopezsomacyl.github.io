import React from 'react';
import { Paper, Typography, Grid, Box, Link } from '@mui/material';

import imagenNoticia1 from '../../assets/hack2.png';
import imagenNoticia2 from '../../assets/hack3.png';
import imagenNoticia3 from '../../assets/hack1.png';

const textoIntro = [
  `El pasado miércoles 25 de junio se celebró el Hackathon "Soluciones GenAI para la Biodiversidad", un evento organizado por el Programa Nacional de Algoritmos Verdes (PNAV), dependiente del Ministerio para la Transformación Digital y de la Función Pública, en colaboración con el Ministerio para la Transición Ecológica y el Reto Demográfico. Esta jornada reunió a expertos en inteligencia artificial, sostenibilidad, biodiversidad y normalización con el objetivo de proponer soluciones responsables basadas en IA generativa que ayuden a preservar el medioambiente.`,
  `La agenda del evento (`,
  <Link 
    href="https://www.youtube.com/watch?v=JN3VxKYsN30" 
    target="_blank" 
    rel="noopener noreferrer"
    key="youtube-link"
  >
    https://www.youtube.com/watch?v=JN3VxKYsN30
  </Link>,
  `), incluyó ponencias inspiradoras, sesiones de mentoría para equipos participantes y mesas de debate. Uno de los momentos destacados fue la mesa "IA sostenible y biodiversidad", celebrada a las 11:20, donde participó RetechFOR, un ambicioso proyecto de transformación digital y ecológica del sector forestal impulsado por las comunidades autónomas de Castilla y León y Canarias.`
];

const objetivosRetechFOR = [
  'Impulsar la digitalización del sector forestal',
  'Aplicar IA para inventarios forestales automatizados, selvicultura de precisión y prevención de incendios',
  'Establecer ecosistemas de emprendimiento digital en territorios rurales',
  'Mejorar la trazabilidad de los productos forestales y reducir la huella de carbono'
];

const participantesMesa = [
  'Jesús Carrasco Naranjo, responsable global de biodiversidad en Iberdrola',
  'Cecilio Angulo, delegado de IA en la Universitat Politècnica de Catalunya (UPC)',
  'Blanca Ruiz Franco, subdirectora general del Sistema Integrado de Información de la Biodiversidad (MITECO)'
];

const textoFinal = [
  `Durante el debate, Carolina de Castro, gestora del proyecto RetechFOR, presentó esta iniciativa como una de las apuestas clave para aplicar tecnologías habilitadoras, como la IA, al monitoreo forestal, la prevención de desastres y el desarrollo de la bioeconomía forestal. La intervención completa puede verse a partir del minuto 2:12, y su presentación específica en el minuto 2:23.`,
  `El proyecto, con un presupuesto de más de 28 millones de euros, está alineado con el Plan de Recuperación, Transformación y Resiliencia de España y forma parte del programa nacional RETECH.`,
  `La conversación abordó cómo las iniciativas públicas y privadas pueden sumar esfuerzos para integrar tecnologías como la inteligencia artificial en la protección del entorno natural.`,
  `Desde el Ministerio se destacó el papel estratégico de RetechFOR en este tipo de encuentros, promoviendo su participación activa como ejemplo de innovación territorial y transición ecológica.`
];

const imagenes = [
  { src: imagenNoticia1, alt: 'Carolina de Castro presentando RetechFOR en el hackathon' },
  { src: imagenNoticia2, alt: 'Objetivos del proyecto RetechFOR' },
  { src: imagenNoticia3, alt: 'Participantes del Hackathon GenAI para la Biodiversidad' }
];

function ArticuloHackaton() {
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
        RetechFOR participa en el debate sobre IA sostenible y biodiversidad en el Hackathon GenAI
      </Typography>

      {/* Sección de introducción */}
      <Typography variant="body1" paragraph sx={{ textAlign: 'justify', lineHeight: 1.7 }}>
        {textoIntro[0]}
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: 'justify', lineHeight: 1.7 }}>
        {textoIntro[1]}{textoIntro[2]}{textoIntro[3]}
      </Typography>

      {/* Sección RetechFOR */}
      <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
        RetechFOR: innovación al servicio del territorio
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ textAlign: 'justify', lineHeight: 1.7 }}>
        {textoFinal[0]}
      </Typography>

      <Typography variant="body1" component="p" sx={{ fontWeight: 'bold', mt: 2 }}>
        Entre los objetivos de RetechFOR destacan:
      </Typography>
      <Box component="ul" sx={{ pl: 3, mb: 2 }}>
        {objetivosRetechFOR.map((objetivo, index) => (
          <li key={`objetivo-${index}`}>
            <Typography variant="body1" component="span">{objetivo}</Typography>
          </li>
        ))}
      </Box>

      <Typography variant="body1" paragraph sx={{ textAlign: 'justify', lineHeight: 1.7 }}>
        {textoFinal[1]}
      </Typography>

      {/* Sección participantes */}
      <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
        Un evento colaborativo con impacto
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ textAlign: 'justify', lineHeight: 1.7 }}>
        La mesa en la que participó RetechFOR contó también con la intervención de:
      </Typography>
      
      <Box component="ul" sx={{ pl: 3, mb: 2 }}>
        {participantesMesa.map((participante, index) => (
          <li key={`participante-${index}`}>
            <Typography variant="body1" component="span">{participante}</Typography>
          </li>
        ))}
      </Box>

      {textoFinal.slice(2).map((parrafo, index) => (
        <Typography 
          key={`final-${index}`}
          variant="body1" 
          paragraph 
          sx={{ textAlign: 'justify', lineHeight: 1.7 }}
        >
          {parrafo}
        </Typography>
      ))}

      {/* Galería de imágenes */}
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
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                {img.alt}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
}

export default ArticuloHackaton;