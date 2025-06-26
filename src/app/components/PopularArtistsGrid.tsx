/* eslint-disable @next/next/no-img-element */
import FemaleIcon from '@mui/icons-material/Female';
import InfoIcon from '@mui/icons-material/Info';
import MaleIcon from '@mui/icons-material/Male';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Chip,
  Box,
  Stack,
  Container,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import React from 'react';

import { TMDBPopularArtist } from '@/types/tmdb';

import { fillMovieAverageByRateValue } from '../../lib/utils';

interface MovieGridProps {
  movies: TMDBPopularArtist[];
}

const posterThumbsPath = process.env.NEXT_PUBLIC_POSTER_THUMBS_PATH;
const stillThumbsPath = process.env.NEXT_PUBLIC_STILL_THUMBS_PATH;

const PopularArtistsGrid: React.FC<MovieGridProps> = ({ movies }) => {
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
    <Box
      sx={{
        flexGrow: 1,
        p: 2,
        backgroundColor: '#212121',
        borderRadius: 4,
      }}
    >
      <Typography color="white" variant="h4" gutterBottom>
        Popular Artists
      </Typography>
      <Typography
        variant="subtitle1"
        color="warning.main"
        gutterBottom
      >
        Discover the most popular artists in the film industry.
      </Typography>
      <Container fixed>
        {movies.map((artist) => (
          <Grid
            size={12}
            overflow={'hidden'}
            key={artist.id}
            border={1}
            borderRadius={2}
            sx={{
              maxWidth: 2000,
              gap: 2,
              mb: 3,
            }}
          >
            <Card
              role="article"
              data-testid={`artist-card-${artist.id}`}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'row',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: (theme) => theme.shadows[5],
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={`${stillThumbsPath}${artist.profile_path}`}
                alt={artist.name}
                sx={{
                  objectFit: 'cover',
                  maxWidth: 700,
                  minWidth: 300,
                  backgroundColor: (theme) => theme.palette.grey[500],
                }}
              />

              <CardContent sx={{ pt: 2, flexGrow: 1 }}>
                <Stack
                  display={'flex'}
                  flexDirection={'row'}
                  gap={1}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  pb={1}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    color="primary.main"
                  >
                    {artist.name}
                  </Typography>
                  <Chip
                    label={artist.known_for_department}
                    variant="outlined"
                  />
                </Stack>
                <Typography
                  variant="subtitle1"
                  component="div"
                  color="secondary.main"
                >
                  Real Name: {artist.original_name}
                </Typography>

                <CardActions
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 2,
                    borderTop: `1px solid #333`,
                    alignItems: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.9)',
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 1, marginTop: 1 }}>
                    <Chip
                      size="small"
                      label="GENDER"
                      icon={
                        artist.gender == 1 ? (
                          <MaleIcon />
                        ) : (
                          <FemaleIcon />
                        )
                      }
                      variant="filled"
                    />
                    <Chip
                      label={`${artist.popularity.toFixed(1)} ★`}
                      size="small"
                      color={`${fillMovieAverageByRateValue(
                        artist.popularity.toFixed(1)
                      )}`}
                    />
                    <Chip
                      label={`Popularity: ${artist.popularity.toFixed(
                        0
                      )}`}
                      size="small"
                      color="secondary"
                      variant="outlined"
                    />
                  </Box>
                </CardActions>

                <Grid container spacing={4}>
                  <ImageList gap={8} cols={2}>
                    <ImageListItem key="Subheader" cols={2}>
                      <ListSubheader component="div">
                        <Typography
                          variant="h6"
                          color="text.secondary"
                          sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            fontFamily: 'Inter, sans-serif',
                            WebkitBoxOrient: 'vertical',
                          }}
                        >
                          Known For:
                        </Typography>
                      </ListSubheader>
                    </ImageListItem>
                    {artist.known_for.map((item) => (
                      <ImageListItem cols={3} key={item.id}>
                        <img
                          src={`${posterThumbsPath}${item.poster_path}`}
                          alt={item.title || 'Unknown Title'}
                          loading="lazy"
                          width={248}
                          height={350}
                        />
                        <ImageListItemBar
                          title={item.title}
                          subtitle={item.name}
                          actionIcon={
                            <IconButton
                              sx={{
                                color: 'rgba(255, 255, 255, 0.54)',
                              }}
                              aria-label={`info about ${item.title}`}
                            >
                              <InfoIcon />
                            </IconButton>
                          }
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Container>
    </Box>
  );
};

export default PopularArtistsGrid;
