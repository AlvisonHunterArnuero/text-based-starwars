import { Box, Container } from '@mui/material';

import TMDBPopularArtists from '@/app/components/TMDB_API/TMDBPopularArtists';

export default function TMDBTVShowsPage() {
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
          <TMDBPopularArtists />
        </Box>
      </Container>
    </main>
  );
}
