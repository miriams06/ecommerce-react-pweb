import { Box, Typography, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton, Paper, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, total, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>O carrinho está vazio.</Typography>
        <Button variant="contained" onClick={() => navigate('/')} sx={{ mt: 2 }}>Ir para a Loja</Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>O Teu Carrinho</Typography>
      <Paper elevation={2}>
        <List>
          {cart.map((item) => (
            <div key={item.id}>
              <ListItem secondaryAction={
                <IconButton edge="end" onClick={() => removeFromCart(item.id)} color="error">
                  <DeleteIcon />
                </IconButton>
              }>
                <ListItemAvatar>
                  <Avatar src={item.image} variant="square" sx={{ width: 56, height: 56, mr: 2 }} />
                </ListItemAvatar>
                <ListItemText 
                  primary={item.title} 
                  secondary={`${item.price.toFixed(2)}€ x ${item.quantity}`} 
                />
                <Typography variant="h6" sx={{ mr: 2 }}>
                  {(item.price * item.quantity).toFixed(2)}€
                </Typography>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
        <Box sx={{ p: 3, bgcolor: '#f5f5f5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button color="error" onClick={clearCart}>Limpar</Button>
            <Typography variant="h5" fontWeight="bold">Total: {total.toFixed(2)}€</Typography>
        </Box>
      </Paper>
    </Box>
  );
}