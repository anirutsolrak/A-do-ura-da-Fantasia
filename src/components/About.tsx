import React from 'react';
import { Container, Typography, Grid, Avatar, Paper, Box } from '@mui/material';

const team = [
  { name: 'Alice', role: 'Mestre Confeiteira', avatar: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' },
  { name: 'Bruno', role: 'Designer Gráfico', avatar: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' },
  { name: 'Ana', role: 'Confeiteira Auxiliar', avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' },
  { name: 'Pedro', role: 'Entregador', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' },
  { name: 'Sofia', role: 'Estagiária de Marketing', avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80' },
];

const About = () => {
  return (
    <Container id="sobre" maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" align="center" color="primary" gutterBottom>
        Nossa História
      </Typography>
      <Typography variant="body1" paragraph>
        A Doçura da Fantasia nasceu do sonho de transformar momentos comuns em experiências mágicas através da confeitaria. Desde 2018, temos encantado paladares e corações com nossas criações únicas e sabores inesquecíveis.
      </Typography>
      <Typography variant="h4" align="center" color="secondary" gutterBottom sx={{ mt: 4 }}>
        Conheça Nossa Equipe
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {team.map((member) => (
          <Grid item key={member.name} xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Avatar
                src={member.avatar}
                alt={member.name}
                sx={{ width: 100, height: 100, margin: 'auto', mb: 2 }}
              />
              <Typography variant="h6">{member.name}</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {member.role}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default About;