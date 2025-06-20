import LiveTvIcon from '@mui/icons-material/LiveTv';
import MovieIcon from '@mui/icons-material/Movie';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';


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
    icon: <LiveTvIcon />,
    path: '/tmdb/top-rated',
  },
  {
    title: 'Popular Tv Shows',
    icon: <LiveTvIcon />,
    path: '/tmdb/tv-shows',
  },
  {
    title: 'Popular Artists',
    icon: <LiveTvIcon />,
    path: '/tmdb/top-artists',
  },
];
