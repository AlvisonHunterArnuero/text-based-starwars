'use client';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Typography,
  Alert,
  Grid,
  MenuItem,
  FormControl,
  Paper,
  Button,
  Select,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { grey } from '@mui/material/colors';
import { useEffect, useState } from 'react';

import { useFilmSort } from '@/_hooks/useFilmSort';
import { SortField } from '@/types/hooks';
import { TSwapiFilm, TSwapiFilmsResponse } from '@/types/swapi';

import { fetchSWAPIFilms } from '../actions/filmsActions';

import { FilmCard } from './FilmCard';

export default function FilmsList() {
  const [filmsData, setFilmsData] =
    useState<TSwapiFilmsResponse | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentVisitor, setCurrentVisitor] = useState<string | null>(
    null
  );

  const {
    sortedFilms,
    sortField,
    setSortField,
    sortDirection,
    toggleSortDirection,
  } = useFilmSort(filmsData as unknown as TSwapiFilmsResponse);

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
      <Box className="max-w-7xl mx-auto w-screen h-screen flex flex-col justify-center items-center">
        <CircularProgress size="5rem" color="inherit" />
        <Typography variant="h4" color="white" sx={{ mt: 2 }}>
          Loading initial films, please wait...
        </Typography>
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
      <Paper
        elevation={3}
        sx={{
          position: 'relative',
          p: 2,
          mb: 2,
          width: '100%',
          borderRadius: 3,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          overflow: 'hidden',
          transition: 'all 0.3s ease-in-out',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: grey[400],
            opacity: 0.7,
            borderRadius: 3,
            zIndex: 0,
          },
          '& > *': {
            position: 'relative',
            zIndex: 1,
          },
        }}
      >
        <FormControl
          fullWidth
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 6,
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h6"
            color="dark"
            textTransform="uppercase"
          >
            Filter Movies By:
          </Typography>
          <Select
            size="small"
            sx={{ minWidth: '250px' }}
            labelId="filter-movies-select-label"
            id="demo-simple-select"
            value={sortField}
            onChange={(e) =>
              setSortField(e.target.value as SortField)
            }
          >
            {['title', 'episode_id', 'producer', 'characters'].map(
              (field) => (
                <MenuItem
                  className="capitalize"
                  key={field}
                  value={field}
                >
                  {field.toUpperCase()}
                </MenuItem>
              )
            )}
          </Select>
          <Button
            variant="contained"
            startIcon={
              sortDirection === 'asc' ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )
            }
            sx={{
              cursor: 'pointer',
              fontWeight: 'bold',
              minWidth: '200px',
            }}
            onClick={toggleSortDirection}
          >
            Sort Direction
          </Button>
        </FormControl>
      </Paper>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {sortedFilms?.map((film: TSwapiFilm, i: number) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={film.episode_id}>
            <FilmCard film={film} ndx={i} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
