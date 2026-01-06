import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import type { Product } from '../services/api';

import { useCart } from '../context/CartContext'; 

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart(); 

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'contain', p: 2 }}
      />
      
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          height: '3.6em',
          lineHeight: '1.8em'
        }}>
          {product.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>

        <Typography variant="h5" color="primary" sx={{ mt: 1, fontWeight: 'bold' }}>
          {product.price.toFixed(2)}€
        </Typography>
      </CardContent>

      <Box sx={{ p: 2, pt: 0, display: 'flex', gap: 1 }}>
        <Button 
          variant="outlined" 
          fullWidth 
          component={Link} 
          to={`/product/${product.id}`}
        >
          Detalhes
        </Button>
        
        <Button 
          variant="contained" 
          fullWidth
          onClick={() => addToCart(product)}
        >
          Adicionar
        </Button>
      </Box>
    </Card>
  );
}