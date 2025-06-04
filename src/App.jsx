import React, { useState } from 'react';
import { ThemeProvider, Box, CssBaseline, Typography } from '@mui/material';
import { theme } from './core/theme';

// Componentes de Layout
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';

// Componentes de Sección
import HeroSection from './component/sections/HeroSection';
import ProjectInfoSection from './component/sections/ProjectInfoSection';
import ConsortiumSection from './component/sections/ConsortiumSection';
import ObjectivesSection from './component/sections/ObjectivesSection';
import PretendsSection from './component/sections/PretendsSection';
import AdjustmentsSection from './component/sections/AdjustmentsSection';
import MisionSection from './component/sections/MisionSection';
import GeneralLinesSection from './component/sections/GeneralLinesSection';
import TramitesSection from './component/sections/TramitesSection';
import NewsSection from './component/sections/NewsSection';

const sectionIds = {
  home: 'home',
  project: 'project',
  pretends: 'pretends',
  mision: 'mision',
  objectives: 'objectives',
  adjustments: 'adjustments',
  generalLines: 'generalLines',
  consortium: 'consortium',
  contactFooter: 'contact-footer'
};

const renderMissingSectionPlaceholder = (id, name) => (
    <Box
      id={id}
      sx={{ minHeight: '30vh', p: 3, display:'flex', alignItems:'center', justifyContent:'center', borderBottom: '1px dashed lightgrey' }}
    >
      <Typography variant="h5" color="text.disabled">Placeholder for: {name} (ID: {id})</Typography>
    </Box>
  );

function App() {
  const [currentPage, setCurrentPage] = useState('main');

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header
          navSectionIds={sectionIds}
          navigateTo={navigateTo}
          currentPage={currentPage}
        />

        <Box component="main" sx={{ flexGrow: 1 }}>
          {currentPage === 'main' && (
            <>
              <HeroSection id={sectionIds.home} />
              <ProjectInfoSection id={sectionIds.project} />
              {sectionIds.pretends ? <PretendsSection id={sectionIds.pretends} /> : renderMissingSectionPlaceholder('pretends', '¿Qué pretende?')}
              <ObjectivesSection id={sectionIds.objectives} />
              {sectionIds.mision ? <MisionSection id={sectionIds.mision} /> : renderMissingSectionPlaceholder('mision', 'Misión')}
              {sectionIds.adjustments ? <AdjustmentsSection id={sectionIds.adjustments} /> : renderMissingSectionPlaceholder('adjustments', 'Adecuación')}
              {sectionIds.generalLines ? <GeneralLinesSection id={sectionIds.generalLines} /> : renderMissingSectionPlaceholder('generalLines', 'Líneas generales')}
              {sectionIds.consortium ? <ConsortiumSection id={sectionIds.consortium} /> : renderMissingSectionPlaceholder('consortium', 'Colaboran')}
            </>
          )}

          {currentPage === 'tramites' && (
            <TramitesSection id="tramites-page-content" />
          )}

          {currentPage === 'news' && (
            <NewsSection id="news-page-content" />
          )}
        </Box>

        <Footer id={sectionIds.contactFooter} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
