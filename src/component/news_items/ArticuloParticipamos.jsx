import React from 'react';
import { Paper, Typography, Grid, Box } from '@mui/material';

import imagenNoticia1 from '../../assets/participamos_1.jpeg';
import imagenNoticia2 from '../../assets/participamos_2.jpg';
import imagenNoticia3 from '../../assets/participamos_3.jpeg';

const textoIntro = `
Durante esta semana hemos tenido el privilegio de participar en el 9º Congreso Forestal Español, celebrado en Gijón, un encuentro de referencia para el sector forestal a nivel nacional. Han sido jornadas muy intensas, en las que hemos podido compartir conocimientos, experiencias y también recoger muchas ideas e inquietudes del sector. 

Desde nuestro stand, hemos recibido a un gran número de personas interesadas en conocer más sobre nuestro proyecto. Ha sido un espacio vivo de diálogo, en el que hemos podido intercambiar puntos de vista con profesionales de distintas disciplinas, centros de investigación, administración pública, asociaciones y empresas del ámbito forestal. 

El congreso ha destacado por la calidad y profundidad de sus ponencias, así como por el interés y diversidad de los temas tratados. 

📚 La programación ha estado estructurada en torno a ocho ejes temáticos clave: 
`;

const fechasPresentaciones = [
  'Clima',
  'Gobernanza',
  'Gestión de recursos forestales',
  'Bioeconomía',
  'Hábitats y biodiversidad ',
  'Fuego',
  'Sanidad',
  'Agua y suelo',
];

const textoFinal = `
Estos ejes han permitido abordar de forma transversal los retos y oportunidades actuales del sector forestal, desde la ciencia y la técnica hasta la política pública y la gestión sostenible del territorio. 

📸 En la imagen: ponencia de Hugo Más durante la tercera jornada del congreso. Foto publicada por La Nueva España (LNE). 

Nos llevamos una experiencia muy positiva, una gran cantidad de contactos e ideas inspiradoras, y sobre todo, la satisfacción de contribuir al impulso de un sector forestal más innovador, resiliente y comprometido con los desafíos globales. 

Gracias a la organización y a todas las personas que han pasado por nuestro espacio. 
 

¡Nos vemos en la próxima edición! `;

const imagenes = [
  { src: imagenNoticia1, alt: 'Descripción de la imagen 1 de la noticia' },
  { src: imagenNoticia2, alt: 'Descripción de la imagen 2 de la noticia' },
  { src: imagenNoticia3, alt: 'Descripción de la imagen 3 de la noticia' },
];

function ArticuloNoticiaDestacado_2() {
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
        🌿 Participamos en el 9º Congreso Forestal Español en Gijón 
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

export default ArticuloNoticiaDestacado_2;
