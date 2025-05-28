import React from 'react';
import { Box, Button, Paper, Typography, Grid } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


function ActionButtonsBlock({ title, subtitle, pdfUrl, sedeUrl }) {
  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 2, sm: 3 },
        textAlign: 'center',
        borderRadius: '12px',
        border: 'none',
        boxShadow: 0,    
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {title && (
        <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography
          variant="body2"
          color="text.secondary"
          paragraph
          sx={{
            minHeight: { xs: 'auto', md: '3.6em' },
            flexGrow: 1,
            width: '100%',
            overflowWrap: 'break-word',
            wordBreak: 'break-word',
          }}
        >
          {subtitle}
        </Typography>
      )}
      <Box sx={{ mt: title || subtitle ? 2 : 0 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Button
              variant="actionBlock"
              component="a"
              href={pdfUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              disabled={!pdfUrl}
              startIcon={<DescriptionIcon sx={{ fontSize: 40 }} />}
            >
              Documentación
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="actionBlock"
              component="a"
              href={sedeUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              disabled={!sedeUrl}
              startIcon={<AccountBalanceIcon sx={{ fontSize: 40 }} />}
            >
              Sede Electrónica
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default ActionButtonsBlock;
