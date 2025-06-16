import React from 'react';
import MicrolinkCard from '@microlink/react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import SectionContainer from '../common/SectionContainer';
import ArticuloNoticiaDestacado from '../news_items/ArticuloNoticiaDestacado';
import ArticuloNoticiaGijon from '../news_items/ArticuloNoticiaGijon';
const urls = [
  'https://theobjective.com/espana/castilla-y-leon/2025-02-11/castilla-y-leon-impulsa-innovacion-forestal-europa/',
  'https://www.diariodeburgos.es/noticia/z95e61e48-a671-1c60-695c97dbd2e6c0ea/202403/el-portal-de-datos-forestales-atraera-a-empresas-a-la-region',
  'https://comunicacion.jcyl.es/web/jcyl/Comunicacion/es/Plantilla100Detalle/1281372051501/ConsejoGobierno/1285472568677/Comunicacion',
  'https://www.diariodeleon.es/leon/provincia/240320/1516344/portal-datos-forestales-creado-junta-ayudara-atraer-empresas.html',
  'https://www.canarias7.es/canarias/fuerteventura/parque-tecnologico-castilla-leon-unidos-monitoreo-forestal-20230418153059-nt.html',
  'https://www.octsi.es/actualidad/noticias-tic-gobierno-canarias/retechfor-canarias',
  'https://www.cesefor.com/es/noticias/castilla-y-leon-promueve-la-digitalizacion-del-sector-forestal-y-la-produccion-sostenible'
];

const mediumSizeDomains = [
  'diariodeleon.es',
  'comunicacion.jcyl.es'
];

const NewsCardItem = ({ url, cardSize }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
        }
      }}
    >
      <MicrolinkCard
        url={url}
        size={cardSize}
        lazy
        style={{ width: '100%', flexGrow: 1 }}
      />
    </Paper>
  );
};

const NewsSection = ({ id }) => {
  const getCardSize = (url) => {
    const isMedium = mediumSizeDomains.some(domain => url.includes(domain));
    return isMedium ? 'medium' : 'large';
  };

  return (
    <SectionContainer
      id={id || 'news-section'}
      title="Noticias Relevantes"
      backgroundColor="background.default"
    >
      <ArticuloNoticiaGijon/>
      <ArticuloNoticiaDestacado />

      {urls.length > 0 ? (
        <>
          <Typography variant="h6" component="h3" gutterBottom align="center" sx={{ mt: 4, mb: 3, fontWeight: 'medium'}}>
            Más Noticias
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {urls.map((url, index) => {
              const sizeForThisCard = getCardSize(url);
              return (
                <Grid xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                  <NewsCardItem url={url} cardSize={sizeForThisCard} />
                </Grid>
              );
            })}
          </Grid>
        </>
      ) : (
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mt: 4 }}>
          No hay más noticias para mostrar en este momento.
        </Typography>
      )}
    </SectionContainer>
  );
};

export default NewsSection;
