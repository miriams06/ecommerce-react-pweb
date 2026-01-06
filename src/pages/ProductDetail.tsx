import { Typography, Container } from '@mui/material';

export default function ProductDetail() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Detalhe do Produto</Typography>
      <p>Aqui vai aparecer a foto e descrição do produto selecionado.</p>
    </Container>
  );
}