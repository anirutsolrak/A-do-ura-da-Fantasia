import React from 'react';
import { Container, Typography, TextField, Button, Box, Grid, Paper } from '@mui/material';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <Container id="contato" maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" align="center" color="primary" gutterBottom>
        Entre em Contato
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Envie-nos uma mensagem
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nome"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="message"
                label="Mensagem"
                type="text"
                id="message"
                multiline
                rows={4}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Enviar Mensagem
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Informações de Contato
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone size={24} />
                <Typography variant="body1" sx={{ ml: 2 }}>
                  (11) 1234-5678
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Mail size={24} />
                <Typography variant="body1" sx={{ ml: 2 }}>
                  contato@docuradafantasia.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <MapPin size={24} />
                <Typography variant="body1" sx={{ ml: 2 }}>
                  Rua das Fadas, 123 - Jardim Encantado<br />
                  São Paulo - SP, 01234-567
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;