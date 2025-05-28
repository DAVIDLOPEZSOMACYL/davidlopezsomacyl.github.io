import React from 'react';
import { Grid, Typography } from '@mui/material';
import SectionContainer from '../common/SectionContainer';
import ActionButtonsBlock from '../common/tramites/ActionButtonsBlock';

// Datos para los bloques de trámites.
const tramitesData = [
  {
    title: "Convocatoria General de Ayudas",
    subtitle: "Accede a la documentación oficial de la convocatoria y realiza tu solicitud a través de la sede electrónica.",
    pdfUrl: "/RetcheFOR.pdf",
    sedeUrl: "https://www.tramitacastillayleon.jcyl.es/",
  },
  {
    title: "Justificación de Subvenciones",
    subtitle: "Consulta la guía de justificación y presenta la documentación requerida en la plataforma online.",
    pdfUrl: "/documents/guia_justificacion_retechfor.pdf",
    sedeUrl: "https://www.tramitacastillayleon.jcyl.es/justificaciones",
  },
  {
    title: "Consultas y Preguntas Frecuentes",
    subtitle: "Encuentra respuestas a las dudas más comunes y accede a la documentación de soporte.",
    pdfUrl: "/documents/faq_retechfor.pdf",
    sedeUrl: "https://www.tramitacastillayleon.jcyl.es/contacto-ayudas",
  },
];

function TramitesSection({ id }) {
  return (
    <>
        <SectionContainer
        id={id}
        title="Trámites y Documentación"
        backgroundColor="background.paper"
        >
        <Grid container spacing={4} justifyContent="center">
            {tramitesData.map((tramite, index) => (
            <Grid 
                item 
                xs={12} sm={6} md={4} 
                key={index} 
                sx={{ 
                    display: 'flex' ,
                    }}>
                <ActionButtonsBlock
                title={tramite.title}
                subtitle={tramite.subtitle}
                pdfUrl={tramite.pdfUrl}
                sedeUrl={tramite.sedeUrl}
                />
            </Grid>
            ))}
        </Grid>
        </SectionContainer>
    </>
  );
}

export default TramitesSection;
