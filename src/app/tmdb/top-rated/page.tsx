import { Box, Container } from '@mui/material';

import TMDBTopRatedList from '@/app/components/TMDB_API/TMDBTopRatedList';

export default function TMDBTopRatedPage() {
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
          <TMDBTopRatedList />
        </Box>
      </Container>
    </main>
  );
}
