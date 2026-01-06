import { Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Lista de Produtos</Typography>
      <p>Aqui vão aparecer os produtos.</p>
    </Container>
  );
}