import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          A Doçura da Fantasia
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          Transformando sonhos em doces realidades desde 2018.
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <Link href="#" color="inherit" sx={{ mx: 1.5 }}>
            <Facebook />
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1.5 }}>
            <Instagram />
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1.5 }}>
            <Twitter />
          </Link>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} A Doçura da Fantasia. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;