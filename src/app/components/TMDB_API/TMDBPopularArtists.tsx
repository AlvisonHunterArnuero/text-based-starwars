'use client';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Stack, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import React, { FC, useEffect, useState } from 'react';

import { fetchTMDBPopularArtists } from '@/app/actions/tmdbActions';
import { TMDBPopularArtistsResponse } from '@/types/tmdb';

import PopularArtistsGrid from '../PopularArtistsGrid';
import { Spinner } from '../Spinner';

const TMDBPopularArtists: FC = () => {
  const [filmsData, setFilmsData] =
    useState<TMDBPopularArtistsResponse | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getTMDBPopularArtists = async () => {
      try {
        setLoading(true);
        const results = await fetchTMDBPopularArtists(currentPage);
        setFilmsData(results);
        setTotalPages(results.total_pages);
        setCurrentPage(results.page);
        setLoading(false);
      } catch (err) {
        console.error(
          err instanceof Error ? err.message : 'Failed to fetch films'
        );
        setLoading(false);
      }
    };

    getTMDBPopularArtists();
  }, [currentPage]);

  const onPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const onNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner title="Fetching Movies..." />
      ) : (
        <PopularArtistsGrid movies={filmsData?.results ?? []} />
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '1rem',
          position: 'fixed',
          bgcolor: blueGrey[700],
          color: 'white',
          boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          transition: 'background-color 0.3s ease',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 6,
            width: '100%',
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0 1rem',
          }}
        >
          <Button
            variant="contained"
            sx={{
              color: 'white',
              borderColor: 'white',
              maxWidth: '150px',
              width: '100%',
            }}
            startIcon={<ArrowBackIcon />}
            onClick={onPreviousPage}
            disabled={currentPage === 1 || loading}
          >
            Previous
          </Button>
          <Typography color="white" variant="body1">
            Page {currentPage} of {totalPages}
          </Typography>
          <Button
            variant="contained"
            sx={{
              color: 'white',
              borderColor: 'white',
              maxWidth: '150px',
              width: '100%',
            }}
            endIcon={<ArrowForwardIcon />}
            onClick={onNextPage}
            disabled={currentPage === totalPages || loading}
          >
            Next
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default TMDBPopularArtists;
