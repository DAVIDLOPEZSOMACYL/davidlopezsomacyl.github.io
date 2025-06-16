import React from 'react';
import { Grid, Typography } from '@mui/material';
import SectionContainer from '../common/SectionContainer';
import ActionButtonsBlock from '../common/tramites/ActionButtonsBlock';

// Datos para los bloques de trámites.
const tramitesData = [
  {
    title: "Proyectos de emprendimiento digital y startups forestales en el ámbito de Castilla y León",
   // subtitle: "Proyectos de emprendimiento digital y startups forestales en el ámbito de Castilla y León",
    pdfUrl: "BOCYL-D-16062025-5.pdf",
    //sedeUrl: "https://www.tramitacastillayleon.jcyl.es/",
  },
  {
    title: "Digitalización y la transformación digital de las empresas de primera transformación de la madera y otros productos forestales.",
    //subtitle: "Digitalización y la transformación digital de las empresas de primera transformación de la madera y otros productos forestales.",
    pdfUrl: "BOCYL-D-16062025-6.pdf",
    //sedeUrl: "https://www.tramitacastillayleon.jcyl.es/justificaciones",
  },
  {
    title: "Ejecución del proyecto «Red tecnológica y territorial para el monitoreo forestal y reducción de desastres ambientales como palancas para el desarrollo de la bioeconomía forestal (RETECHFOR).»",
    //subtitle: "Ejecución del proyecto «Red tecnológica y territorial para el monitoreo forestal y reducción de desastres ambientales como palancas para el desarrollo de la bioeconomía forestal (RETECHFOR).»",
    pdfUrl: "BOCYL-D-16062025-7.pdf",
   // sedeUrl: "https://www.tramitacastillayleon.jcyl.es/contacto-ayudas",
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
