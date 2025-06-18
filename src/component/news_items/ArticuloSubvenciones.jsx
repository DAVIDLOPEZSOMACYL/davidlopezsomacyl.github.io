import React from 'react';
import { Paper, Typography } from '@mui/material';

const ArticuloSubvenciones = () => {
    const textoIntro = `
    Ya están disponibles en la sede electrónica las convocatorias de subvenciones del Proyecto RETECHFOR 2025, una iniciativa clave para la transformación digital, el emprendimiento y la sostenibilidad en el ámbito forestal. Estas ayudas están dirigidas a empresas, emprendedores y agentes del sector interesados en innovar y modernizar sus procesos, productos y servicios.
    Los enlaces de acceso directo a las convocatorias puedes encontrarlos en la sección de Trámites de la web.

    Estas subvenciones están enmarcadas en el impulso a la bioeconomía forestal y la transformación tecnológica del sector, con el objetivo de fortalecer la competitividad, la sostenibilidad y el empleo rural a través de la digitalización y la innovación.
    📅 Plazo de solicitud: Consulta cada convocatoria en la sede electrónica para conocer los plazos y requisitos específicos.
    📍 Dónde presentar la solicitud: A través de la Sede Electrónica del organismo convocante.
    `;

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
          Subvenciones RETECHFOR 2025
        </Typography>
  
        {textoIntro.split('\n').map((parrafo, index) => (
          parrafo.trim() && (
            <Typography 
              variant="body1" 
              paragraph 
              key={index} 
              sx={{ 
                textAlign: 'justify', 
                lineHeight: 1.7,
                fontWeight: parrafo.includes('📅') || parrafo.includes('📍') ? 'bold' : 'normal'
              }}
            >
              {parrafo.trim()}
            </Typography>
          )
        ))}
      </Paper>
    );
}

export default ArticuloSubvenciones;