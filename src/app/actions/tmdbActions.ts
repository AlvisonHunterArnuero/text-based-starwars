'use server'
import {
    searchMovies,
    getPopularMovies,
    getTopRatedMovies,
    getPopularTvShows,
    getPopularArtists
} from '@/lib/services/tmdbService';

export {
    searchMovies as fetchTMDBMovies,
    getPopularMovies as fetchTMDBPopularMovies,
    getTopRatedMovies as fetchTMDBTopRatedMovies,
    getPopularTvShows as fetchTMDBTvShows,
    getPopularArtists as fetchTMDBPopularArtists
};