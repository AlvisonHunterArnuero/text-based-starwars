'use client';
import React, { FC, useEffect, useState } from 'react';
import { TMDBMovieResponse } from '@/types/tmdb';
import {
  fetchTMDBMovies,
  fetchTMDBPopularMovies,
} from '../actions/tmdb';
import MovieGrid from './MovieGrid';
import { TextField } from '@mui/material';

const TMDBList: FC = () => {
  const [filmsData, setFilmsData] =
    useState<TMDBMovieResponse | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedQuery, setDebouncedQuery] =
    useState<string>('star wars');

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  // Debounce function
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const results = await fetchTMDBPopularMovies();
        setFilmsData(results);
      } catch (err) {
        console.error(
          err instanceof Error ? err.message : 'Failed to fetch films'
        );
      }
    };

    fetchPopularMovies();
  }, []);

  // Fetch movies by name when debounced query changes
  useEffect(() => {
    const fetchMoviesByName = async () => {
      try {
        if (debouncedQuery.trim() === '') {
          // If search is empty, fetch popular movies instead
          const results = await fetchTMDBPopularMovies();
          setFilmsData(results);
        } else {
          const results = await fetchTMDBMovies(debouncedQuery);
          setFilmsData(results);
        }
      } catch (err) {
        console.error(
          err instanceof Error ? err.message : 'Failed to fetch films'
        );
      }
    };

    fetchMoviesByName();
  }, [debouncedQuery]);

  return (
    <>
      <TextField
        fullWidth
        label="Search for a movie"
        variant="outlined"
        margin="normal"
        autoFocus
        helperText="Search for a movie by name"
        id="fullWidth"
        color="primary"
        placeholder="e.g. Star Wars"
        sx={{
          backgroundColor: 'orange.500',
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'orange.500',
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'white',
          },
          '& .MuiInputBase-input': {
            color: 'white',
          },
        }}
        onChange={handleSearchQueryChange}
      />
      <MovieGrid movies={filmsData?.results ?? []} />
    </>
  );
};

export default TMDBList;
