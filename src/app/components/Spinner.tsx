import { Box, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

export const Spinner = ({ title }: { title: string }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '80vh',
        alignItems: 'center',
        justifyContent: 'justify-between',
        gap: 3,
      }}
    >
      <CircularProgress />
      <Typography variant="h4">{title}</Typography>
    </Box>
  );
};
