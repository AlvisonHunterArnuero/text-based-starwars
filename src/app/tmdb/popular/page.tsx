import { Box, Container } from '@mui/material';

import TMDBPopularList from '@/app/components/TMDBPopularList';

export default function TMDBPopularPage() {
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
          <TMDBPopularList />
        </Box>
      </Container>
    </main>
  );
}
