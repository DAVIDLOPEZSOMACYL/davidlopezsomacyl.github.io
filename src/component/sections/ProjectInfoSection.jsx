import React from 'react';
import { Grid, Box } from '@mui/material';
import SectionContainer from '../common/SectionContainer';
import heroBackgroundImage from '../../assets/Que_Es.png';

function ProjectInfoSection({ id }) {
  return (
    <SectionContainer
      id={id}
      backgroundColor="background.paper"
    >
      <Grid container spacing={{ xs: 3, md: 6 }} justifyContent="center" alignItems="center">
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src={heroBackgroundImage}
            alt="¿Qué es RetechFOR?"
            sx={{
              maxWidth: '100%',
              height: 'auto', 
              display: 'block',
              mx: 'auto',
            }}
          />
        </Grid>
      </Grid>
    </SectionContainer>
  );
}

export default ProjectInfoSection;
