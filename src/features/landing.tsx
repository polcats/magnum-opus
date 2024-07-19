'use client';

import { Button, Container, Typography } from '@mui/material';

import { useTheme } from '@/hooks/useTheme';

export default function Landing() {
  const { toggleMode } = useTheme();
  return (
    <Container>
      <Typography variant="body1">Hello world!</Typography>
      <Button onClick={toggleMode}>Click me!</Button>
    </Container>
  );
}
