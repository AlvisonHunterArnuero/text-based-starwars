'use client';

import {
  Box,
  TextField,
  Typography,
  Button,
  Container,
} from '@mui/material';
import { useState } from 'react';

export default function WelcomeModal({
  onComplete,
}: {
  onComplete: (name: string) => void;
}) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onComplete(name);
    }
  };

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backdropFilter: 'blur(5px)',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          textAlign="center"
          color="white"
          sx={{ mb: 4, textShadow: '2px 2px 2px rgba(0,0,0,0.5)' }}
        >
          Welcome to Our Starwars World!
        </Typography>
        <Typography
          variant="h5"
          component="p"
          gutterBottom
          textAlign="center"
          sx={{
            mb: 4,
            color: 'white',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          }}
        >
          Please enter your name to continue
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              mb: 3,
              backgroundColor: 'rgba(255,255,255,0.8)',
              borderRadius: '4px',
            }}
            autoFocus
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            disabled={!name.trim()}
            sx={{
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Enter
          </Button>
        </form>
      </Container>
    </Box>
  );
}
