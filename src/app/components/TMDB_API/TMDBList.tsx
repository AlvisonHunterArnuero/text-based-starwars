'use client';

import { TextField } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

import { fetchTMDBMovies } from '@/app/actions/tmdbActions';
import { TMDBMovieResponse } from '@/types/tmdb';

import MovieGrid from '../MovieGrid';

const TMDBList: FC = () => {
  const [filmsData, setFilmsData] =
    useState<TMDBMovieResponse | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('Star Wars');
  const [debouncedQuery, setDebouncedQuery] =
    useState<string>('');

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

  // Fetch movies by name when debounced query changes
  useEffect(() => {
    const fetchMoviesByName = async () => {
      try {
        if (debouncedQuery.trim() === '') {
          // If search is empty, fetch popular movies instead
          const results = await fetchTMDBMovies('Star Wars');
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
        variant="outlined"
        margin="normal"
        autoFocus
        helperText="Search for a movie by name"
        id="fullWidth"
        color="primary"
        placeholder="Search for a movie by name: e.g. Star Wars"
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
            color: 'black',
            backgroundColor: 'whitesmoke',
          },
          '& .MuiFormHelperText-root': {
            color: 'white',
            fontSize: '1rem',
            fontWeight: 400,
          },
        }}
        onChange={handleSearchQueryChange}
      />
      <MovieGrid movies={filmsData?.results ?? []} />
    </>
  );
};

export default TMDBList;
