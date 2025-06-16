import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import MovieIcon from '@mui/icons-material/Movie';
import { DrawerMenuItem } from '@/types/navigation';

export const drawerItemsArr: DrawerMenuItem[] = [
  {
    title: 'StarWars API',
    icon: <MovieFilterIcon />,
    path: '/',
  },
  { title: 'The MovieDB API', icon: <MovieIcon />, path: '/tmdb' },
];
