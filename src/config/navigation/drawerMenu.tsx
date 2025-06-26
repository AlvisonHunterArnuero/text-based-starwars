import Groups2Icon from '@mui/icons-material/Groups2';
import HotelClassIcon from '@mui/icons-material/HotelClass';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MovieIcon from '@mui/icons-material/Movie';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import StarsIcon from '@mui/icons-material/Stars';
import React from 'react';

import { DrawerMenuItem } from '@/types/navigation';

export const drawerItemsArr: DrawerMenuItem[] = [
  {
    title: 'StarWars Movies',
    icon: <MovieFilterIcon />,
    path: '/swapi',
  },
  {
    title: 'TMDB Search Movies',
    icon: <LiveTvIcon />,
    path: '/tmdb/',
  },
  {
    title: 'Popular Movies',
    icon: <MovieIcon />,
    path: '/tmdb/popular',
  },
  {
    title: 'Top Rated Movies',
    icon: <HotelClassIcon />,
    path: '/tmdb/top-rated',
  },
  {
    title: 'Popular Tv Shows',
    icon: <StarsIcon />,
    path: '/tmdb/tv-shows',
  },
  {
    title: 'Popular Artists',
    icon: <Groups2Icon />,
    path: '/tmdb/top-artists',
  },
];
