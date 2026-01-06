import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { Box } from '@mui/material';
import { CartProvider } from './context/CartContext'; 

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        
        <Navbar />

        <Box sx={{ p: 0 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Box>

      </CartProvider>
    </BrowserRouter>
  );
}

export default App;