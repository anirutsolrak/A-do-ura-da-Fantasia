import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?cake,fantasy)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h1" align="center" color="primary" gutterBottom>
          A Doçura da Fantasia
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Descubra um mundo mágico de sabores e encanto em nossa confeitaria artesanal.
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="primary" size="large" onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}>
            Explorar Produtos
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;