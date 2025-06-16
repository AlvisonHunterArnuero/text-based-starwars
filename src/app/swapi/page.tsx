'use client';

import { Box } from '@mui/material';
import React from 'react';

import FilmsList from '../components/FilmsList';

export default function SwapiHome() {
  return (
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <FilmsList />
    </Box>
  );
}
