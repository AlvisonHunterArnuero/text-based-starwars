import { Box, Container } from '@mui/material';

import TMDBList from '@/app/components/TMDB_API/TMDBList';

export default function TMDBPage() {
  return (
    <main>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TMDBList />
        </Box>
      </Container>
    </main>
  );
}
