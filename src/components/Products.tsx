import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const products = [
  { 
    id: 1,
    name: 'Bolos Mágicos', 
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Bolos personalizados com temas de contos de fadas e fantasia.'
  },
  { 
    id: 2,
    name: 'Doces Finos', 
    image: 'https://images.unsplash.com/photo-1570476922354-81227cdbb76c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Macarons, trufas e brigadeiros com sabores mágicos.'
  },
  { 
    id: 3,
    name: 'Sobremesas Encantadas', 
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Tortas, mousses e pudins inspirados em contos de fadas.'
  },
  { 
    id: 4,
    name: 'Kits Temáticos', 
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Caixas personalizadas com seleção de doces temáticos.'
  },
];

const Products = () => {
  return (
    <Container id="produtos" maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" align="center" color="primary" gutterBottom>
        Nossos Produtos Mágicos
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Button
                  component={Link}
                  to={`/produto/${product.id}`}
                  size="small"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Saiba mais
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;