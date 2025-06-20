import { Box, Container } from '@mui/material';

import TMDBTvShows from '@/app/components/TMDB_API/TMDBTvShows';

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
          <TMDBTvShows />
        </Box>
      </Container>
    </main>
  );
}
