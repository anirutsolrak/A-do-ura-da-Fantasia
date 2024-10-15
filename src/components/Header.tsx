import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Cake } from 'lucide-react';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo" onClick={() => scrollToSection('home')}>
          <Cake />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          A Doçura da Fantasia
        </Typography>
        <Button color="inherit" onClick={() => scrollToSection('home')}>Home</Button>
        <Button color="inherit" onClick={() => scrollToSection('produtos')}>Produtos</Button>
        <Button color="inherit" onClick={() => scrollToSection('sobre')}>Sobre</Button>
        <Button color="inherit" onClick={() => scrollToSection('contato')}>Contato</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;