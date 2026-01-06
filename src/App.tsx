import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { Box } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Box sx={{ p: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;