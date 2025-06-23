import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Chip,
  Box,
} from '@mui/material';
import React from 'react';

import { TMDBMovie } from '@/types/tmdb';

import { fillMovieAverageByRateValue } from '../../lib/utils';

interface MovieGridProps {
  movies: TMDBMovie[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h4" color="error">
          No movies found with that name.
        </Typography>
      </Box>
    );
  }
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid size={{ xs: 12, md: 6 }} key={movie.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: (theme) => theme.shadows[5],
                },
              }}
            >
              <CardMedia
                component="img"
                height="400"
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                sx={{
                  objectFit: 'cover',
                  backgroundColor: (theme) => theme.palette.grey[500],
                }}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {movie.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {movie.overview}
                </Typography>
              </CardContent>

              <CardActions
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  p: 2,
                  borderTop: `1px solid #333`,
                }}
              >
                <Box>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    Released:{' '}
                    {new Date(
                      movie.release_date
                    ).toLocaleDateString()}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Chip
                    label={`${movie.vote_average.toFixed(1)} ★`}
                    size="small"
                    color={`${fillMovieAverageByRateValue(
                      movie.vote_average.toFixed(1)
                    )}`}
                  />
                  <Chip
                    label={`Popularity: ${movie.popularity.toFixed(
                      0
                    )}`}
                    size="small"
                    color="secondary"
                    variant="outlined"
                  />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieGrid;
