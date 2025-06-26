import {
  Box,
  Typography,
  Card,
  CardActions,
  CardContent,
  Chip,
  CardMedia,
} from '@mui/material';
import React from 'react';

import { TSwapiFilm } from '@/types/swapi';

import {
  swCardMediaImagesArr,
  swFilmsCardImgURIS,
} from '../../config/navigation/cardImagesResources';

export function FilmCard({
  film,
}: {
  film: TSwapiFilm;
  ndx: number;
}) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 300,
        maxWidth: 600,
        maxHeight: 900,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        color: 'white',
        borderRadius: 2,
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
      variant="outlined"
    >
      <CardMedia
        sx={{
          height: 300,
          minHeight: 300,
          minWidth: 300,
          backgroundPosition: 'top',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        }}
        image={`${swFilmsCardImgURIS}/${
          swCardMediaImagesArr[film.episode_id - 1]
        }`}
        title={film.title}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
      <CardContent
        sx={{
          backgroungColor: 'transparent',
          flexGrow: 1,
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Episode {film.episode_id}: {film.title}
        </Typography>

        <Typography
          variant="subtitle2"
          color="text.secondary"
          gutterBottom
        >
          Released: {new Date(film.release_date).toLocaleDateString()}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontStyle: 'italic',
            textAlign: 'justify',
            maxWidth: 600,
          }}
        >
          {film.opening_crawl}
        </Typography>

        <Box
          sx={{
            mt: 1,
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <Typography color="info" variant="caption" display="block">
            Director: {film.director}
          </Typography>
          <Typography
            color="warning"
            variant="caption"
            display="block"
          >
            Producer: {film.producer}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            mt: 1,
            mb: 2,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          <Chip
            color="primary"
            label={`Characters: ${film.characters.length}`}
            size="small"
          />
          <Chip
            color="secondary"
            label={`Planets: ${film.planets.length}`}
            size="small"
          />
          <Chip
            color="success"
            label={`Starships: ${film.starships.length}`}
            size="small"
          />
          <Chip
            color="warning"
            label={`Species: ${film.species.length}`}
            size="small"
          />
          <Chip
            color="error"
            label={`Vehicles: ${film.vehicles.length}`}
            size="small"
          />
        </Box>
      </CardActions>
    </Card>
  );
}
