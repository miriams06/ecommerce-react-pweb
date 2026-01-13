import { Box, Typography, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton, Paper, Divider, Container, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, addToCart, decreaseQuantity, total, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <Box sx={{ 
        height: '80vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        bgcolor: '#f5f5f5' 
      }}>
        <ShoppingBagIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
        <Typography variant="h4" color="text.secondary" gutterBottom>
          Your cart is empty
        </Typography>
        <Button variant="contained" size="large" onClick={() => navigate('/')} sx={{ mt: 2 }}>
          Start Shopping
        </Button>
      </Box>
    );
  }

  return (
    <Container maxWidth={false} sx={{ pt: 4, pb: 4, px: { xs: 2, md: 5 } }}>
      <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/')} sx={{ mb: 2 }}>
        Continue Shopping
      </Button>

      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
        Shopping Cart ({cart.length} items)
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Paper elevation={2}>
            <List sx={{ p: 0 }}>
              {cart.map((item, index) => (
                <Box key={item.id}>
                  <ListItem
                    alignItems="center"
                    sx={{ py: 3 }}
                    secondaryAction={
                      <IconButton edge="end" onClick={() => removeFromCart(item.id)} color="error" title="Remove">
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar 
                        src={item.image} 
                        variant="square" 
                        sx={{ width: 100, height: 100, mr: 3, objectFit: 'contain' }} 
                      />
                    </ListItemAvatar>
                    
                    <ListItemText
                      secondaryTypographyProps={{ component: 'div' }} 
                      primary={
                        <Typography variant="h6" sx={{ mb: 1 }}>
                          {item.title}
                        </Typography>
                      }
                      secondary={
                        <Box component="div">
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            Category: {item.category}
                          </Typography>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                             <Typography variant="body1" sx={{ mr: 2 }}>
                                ${item.price.toFixed(2)}
                             </Typography>
                             
                             <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: 1 }}>
                                <IconButton size="small" onClick={() => decreaseQuantity(item.id)} color="default">
                                   <RemoveIcon fontSize="small" />
                                </IconButton>

                                <Typography sx={{ mx: 2, fontWeight: 'bold' }}>
                                   {item.quantity}
                                </Typography>

                                <IconButton size="small" onClick={() => addToCart(item)} color="primary">
                                   <AddIcon fontSize="small" />
                                </IconButton>
                             </Box>
                          </Box>
                        </Box>
                      }
                    />
                    
                    <Typography 
                        variant="h5" 
                        fontWeight="bold" 
                        color="primary" 
                        sx={{ display: { xs: 'none', sm: 'block' }, minWidth: '100px', textAlign: 'right', mr: 2 }}
                    >
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </ListItem>
                  {index < cart.length - 1 && <Divider component="li" />}
                </Box>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card elevation={3} sx={{ position: 'sticky', top: 20 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Order Summary
              </Typography>
              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="body1">Subtotal:</Typography>
                <Typography variant="body1">${total.toFixed(2)}</Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="body1">Shipping:</Typography>
                <Typography variant="body1" color="success.main">Free</Typography>
              </Box>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                <Typography variant="h5" fontWeight="bold">Total:</Typography>
                <Typography variant="h4" color="primary" fontWeight="bold">
                  ${total.toFixed(2)}
                </Typography>
              </Box>

              <Button 
                variant="contained" 
                size="large" 
                fullWidth 
                sx={{ py: 1.5, fontSize: '1.1rem' }}
                onClick={() => alert('Purchase completed successfully!')} 
              >
                Checkout
              </Button>

              <Button 
                color="error" 
                fullWidth 
                sx={{ mt: 2 }} 
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}