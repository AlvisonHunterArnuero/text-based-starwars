'use client';

import {
  Box,
  Typography,
  Alert,
  Skeleton,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';

import { TSwapiFilm, TSwapiFilmsResponse } from '@/types/swapi';

import { fetchSWAPIFilms } from '../actions/films';

import { FilmCard } from './FilmCard';

export default function FilmsList() {
  const [filmsData, setFilmsData] =
    useState<TSwapiFilmsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentVisitor, setCurrentVisitor] = useState<string | null>(
    null
  );

  useEffect(() => {
    const userName = localStorage.getItem('userName');
    setCurrentVisitor(userName);
    const loadFilms = async () => {
      try {
        setLoading(true);
        const data = await fetchSWAPIFilms();
        setFilmsData(Array.isArray(data) ? data : [data]);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to fetch films'
        );
      } finally {
        setLoading(false);
      }
    };

    loadFilms();
  }, []);

  if (loading) {
    return (
      <Box sx={{ mt: 4 }}>
        <Skeleton variant="text" width="60%" height={40} />
        <Skeleton variant="text" width="40%" height={30} />
        <Grid container spacing={3} mt={2}>
          {[...Array(3)].map((_, index) => (
            <Grid container key={index}>
              <Skeleton variant="rectangular" height={200} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
  if (error) {
    return (
      <Box mt={4}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }
  if (!filmsData || filmsData.length === 0) {
    return (
      <Box mt={4}>
        <Alert severity="info">No films found</Alert>
      </Box>
    );
  }

  return (
    <Box className="max-w-7xl mx-auto w-screen flex flex-col justify-center items-center">
      <Typography
        className="font-inter text-white"
        variant="h4"
        gutterBottom
      >
        Hello {currentVisitor || 'Guest'}, Welcome To StarWars!
      </Typography>
      <Typography variant="h6" gutterBottom>
        Films Total: {filmsData?.length || 0}
      </Typography>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {filmsData?.map((film: TSwapiFilm, i: number) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={film.episode_id}>
            <FilmCard film={film} ndx={i} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
