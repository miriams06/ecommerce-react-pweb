import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, CircularProgress, Paper, Rating, Divider, Snackbar, Alert } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useCart } from '../context/CartContext';
import { api, type Product } from '../services/api';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!id) return;
    api.getProductById(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box>;
  
  if (!product) return <Typography>Product not found.</Typography>;

  return (
    <Box sx={{ p: 4, maxWidth: '1200px', margin: '0 auto' }}>
      <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/')} sx={{ mb: 3 }}>
        Back
      </Button>

      <Paper elevation={3} sx={{ p: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img src={product.image} alt={product.title} style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography variant="overline" color="text.secondary">{product.category}</Typography>
          <Typography variant="h4" gutterBottom>{product.title}</Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={product.rating.rate} readOnly precision={0.5} />
            <Typography variant="caption" sx={{ ml: 1 }}>({product.rating.count} reviews)</Typography>
          </Box>

          <Typography variant="h4" color="primary" sx={{ mb: 3, fontWeight: 'bold' }}>
            ${product.price.toFixed(2)}
          </Typography>

          <Typography paragraph>{product.description}</Typography>
          <Divider sx={{ mb: 3 }} />

          <Button 
            variant="contained" 
            size="large" 
            startIcon={<ShoppingCartIcon />}
            onClick={handleAddToCart}
            fullWidth
          >
            Add to Cart
          </Button>
        </Box>
      </Paper>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Product added to cart!
        </Alert>
      </Snackbar>
    </Box>
  );
}