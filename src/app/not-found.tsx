import { Paper, Stack, Typography } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Stack
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Paper
        sx={{
          backgroundColor: '#111111',
          color: '#fff',
          textAlign: 'center',
          opacity: 0.9,
          padding: 2,
          borderRadius: 12,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          maxWidth: '600px',
          maxHeight: '400px',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          margin: 'auto 0',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Typography color="warning" variant="h2">
          Not Found
        </Typography>
        <Typography variant="h4">
          Could not find requested resource
        </Typography>
        <Link className="text-blue-500 text-2xl" href="/">
          Return Home
        </Link>
      </Paper>
    </Stack>
  );
}
