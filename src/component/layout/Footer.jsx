import React from "react";
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  Grid,
  Divider,
  IconButton
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer({ id }) {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      id={id}
      component="footer"
      sx={{
        backgroundColor: "grey.200",
        color: "text.secondary",
        py: { xs: 4, sm: 6 },
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={8} md={6}> 
            <Typography
              variant="h6"
              gutterBottom
              sx={{ textAlign: {xs: 'center', md: 'left'} }}
            >
              Contacto
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1, justifyContent: {xs: 'center', md: 'flex-start'} }}>
              <LocationOnIcon sx={{ mr: 1, color: "primary.main" }} />
              <Typography variant="body2" sx={{textAlign: {xs: 'center', md: 'left'}}}>
                Edificio PRAE
                <br />
                Calle Cañada Real, 306
                <br />
                47008, Valladolid
                <br />
                983 362 888
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1, justifyContent: {xs: 'center', md: 'flex-start'} }}>
              <EmailIcon sx={{ mr: 1, color: "primary.main" }} />
              <MuiLink
                href="mailto:info@retechfor.es"
                color="inherit"
                underline="hover"
              >
                info@retechfor.es
              </MuiLink>
            </Box>
          </Grid>
          
          {/* Sección Sígueme simplificada */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ textAlign: {xs: 'center', md: 'left'} }}
            >
              Síguenos
            </Typography>
            <Box sx={{ display: "flex", justifyContent: {xs: 'center', md: 'flex-start'} }}>
              <IconButton 
                href="https://www.linkedin.com/company/retechfor-cyl/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={{ '&:hover': { color: '#0077b5' } }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
          {/* Sección Politicas / Legal */}
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary" align="center">
                <MuiLink
                  href="/retechfor/Aviso legal  -Somacyl 2021.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mx: 1 }}
                >
                  Aviso Legal
                </MuiLink>
                <MuiLink
                  href="/retechfor/Política de Cookies RGPD-SOMACYL 2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mx: 1 }}
                >
                  Política de Cookies
                </MuiLink>
                <MuiLink
                  href="/retechfor/Política de privacidad web- SOMACYL 2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mx: 1 }}
                >
                  Política de Privacidad
                </MuiLink>
              </Typography>
            </Box>
        <Divider sx={{ my: 4 }} />
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2">
            &copy; {currentYear} RetechFOR. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;