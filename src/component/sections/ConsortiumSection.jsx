import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import SectionContainer from '../common/SectionContainer'; 
import PartnerLogo from '../common/PartnerLogo'; 
import logoEuropeo from '../../assets/Unión_Europea_POS.jpg';
import gobiernoEspana from '../../assets/Gobierno de España- bn positivo.jpg';
import JuntaCyL from '../../assets/Identificador+Junta+color (1).jpg'; 
import GobCanarias from '../../assets/Gobierno de Canarias.png'; 
import Recuperacion from '../../assets/Logo PRTR.jpg'; 

const partnersData = [
  {
    name: 'Unión Europea',
    logoSrc: logoEuropeo,
    website: 'https://next-generation-eu.europa.eu/index_es',
  },
  {
    name: 'Gobierno de España',
    logoSrc: gobiernoEspana,
    website: 'https://administracion.gob.es/',
  },
  {
    name: 'Junta de Castilla y León',
    logoSrc: JuntaCyL,
    website: 'https://www.jcyl.es/web/jcyl/Portada/es/Home/1246890364336/_/_/_',
  },
  {
    name: 'Gobierno de Canarias',
    logoSrc: GobCanarias,
    website: 'https://www.gobiernodecanarias.org/principal/',
  },
  {
    name: 'Plan de recuperacion, Transformación y Resiliencia',
    logoSrc: Recuperacion,
    website: 'https://planderecuperacion.gob.es/',
  },
];

function ConsortiumSection({ id }) {
  return (
    <SectionContainer
      id={id} 
      title="Colaboran"
      backgroundColor="background.default" 
    >
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center" alignItems="center">
        {partnersData.map((partner) => (
          <Grid item key={partner.name} xs={6} sm={4} md={3} lg={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <PartnerLogo
              src={partner.logoSrc}
              alt={partner.name}
              href={partner.website}
              width={130} 
            />
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
}

export default ConsortiumSection;
