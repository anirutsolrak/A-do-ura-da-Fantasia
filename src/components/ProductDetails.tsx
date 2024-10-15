import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Paper } from '@mui/material';

const products = [
  { 
    id: 1,
    name: 'Bolos Mágicos', 
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Bolos personalizados com temas de contos de fadas e fantasia.',
    longDescription: 'Nossos Bolos Mágicos são verdadeiras obras de arte comestíveis. Cada bolo é cuidadosamente elaborado para trazer à vida os mais encantadores contos de fadas e temas fantásticos. Utilizamos ingredientes de alta qualidade e técnicas avançadas de confeitaria para criar bolos que não apenas são visualmente deslumbrantes, mas também deliciosos. Perfeitos para aniversários, casamentos temáticos ou qualquer ocasião especial que mereça um toque de magia.'
  },
  { 
    id: 2,
    name: 'Doces Finos', 
    image: 'https://images.unsplash.com/photo-1570476922354-81227cdbb76c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Macarons, trufas e brigadeiros com sabores mágicos.',
    longDescription: 'Nossa coleção de Doces Finos é uma verdadeira experiência gustativa. Cada peça é meticulosamente criada para oferecer uma explosão de sabores únicos e texturas surpreendentes. Dos nossos macarons coloridos e crocantes às trufas cremosas e brigadeiros gourmet, cada doce é uma pequena obra-prima. Utilizamos ingredientes premium e combinações de sabores inovadoras para criar doces que encantam tanto o paladar quanto os olhos.'
  },
  { 
    id: 3,
    name: 'Sobremesas Encantadas', 
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Tortas, mousses e pudins inspirados em contos de fadas.',
    longDescription: 'Nossas Sobremesas Encantadas são a personificação dos contos de fadas em forma de sobremesa. Cada criação é inspirada em histórias mágicas e lendas encantadoras. De tortas elaboradas que parecem saídas das páginas de um livro de contos, a mousses leves como nuvens e pudins cremosos dignos da realeza, cada sobremesa é uma jornada sensorial única. Utilizamos técnicas tradicionais e inovadoras para criar sobremesas que não apenas satisfazem o paladar, mas também transportam você para um mundo de fantasia.'
  },
  { 
    id: 4,
    name: 'Kits Temáticos', 
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Caixas personalizadas com seleção de doces temáticos.',
    longDescription: 'Nossos Kits Temáticos são a escolha perfeita para quem deseja uma experiência completa de doces mágicos. Cada kit é cuidadosamente montado com uma seleção de nossas criações mais populares, todas seguindo um tema específico. Seja para uma festa de aniversário de conto de fadas, um chá de bebê encantado ou simplesmente para presentear alguém especial, nossos kits oferecem uma variedade de sabores e texturas que contam uma história deliciosa. Cada caixa é uma surpresa encantadora, decorada com atenção aos detalhes para proporcionar uma experiência verdadeiramente mágica.'
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Produto não encontrado
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button component={Link} to="/" variant="contained" color="primary">
            Voltar para a página inicial
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" color="primary" gutterBottom>
          {product.name}
        </Typography>
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            width: '100%',
            height: 400,
            objectFit: 'cover',
            borderRadius: 2,
            mb: 4
          }}
        />
        <Typography variant="body1" paragraph>
          {product.longDescription}
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
          <Button component={Link} to="/" variant="outlined" color="primary">
            Voltar para a página inicial
          </Button>
          <Button variant="contained" color="primary">
            Fazer pedido
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProductDetails;