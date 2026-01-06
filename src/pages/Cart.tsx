import { Typography, Container } from '@mui/material';

export default function Cart() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Carrinho de Compras</Typography>
      <p>Aqui vão aparecer os itens adicionados.</p>
    </Container>
  );
}