// 'use server'
// import { TMDBMovieResponse, TMDBErrorResponse } from '@/types/tmdb';

// const accessToken: string | undefined = process.env.TMDB_API_READ_ACCESS_TOKEN;
// const apiKey: string | undefined = process.env.TMDB_API_KEY;

// if (!accessToken) {
//     console.error('TMDB API read access token is not configured');
//     throw new Error('TMDB API read access token is not configured');
// }

// if (!apiKey) {
//     console.error('TMDB API key is not configured');
//     throw new Error('TMDB API key is not configured');
// }



// export async function fetchTMDBMovies(movieName: string): Promise<TMDBMovieResponse> {
//     try {
//         const url = new URL(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`);
//         if (apiKey) url.searchParams.append('api_key', apiKey);

//         const response = await fetch(url.toString(), {
//             method: 'GET',
//             headers: {
//                 ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             next: {
//                 revalidate: 86400 // 24 hours cache
//             }
//         });

//         if (!response.ok) {
//             const errorData: TMDBErrorResponse = await response.json();
//             throw new Error(
//                 `TMDB request failed: ${errorData.status_message || response.statusText} (Status: ${response.status})`
//             );
//         }

//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching movie from TMDB:', error);
//         throw new Error(
//             error instanceof Error
//                 ? error.message
//                 : 'Failed to fetch movie data from TMDB'
//         );
//     }
// }

// export async function fetchTMDBPopularMovies(page: number = 1): Promise<TMDBMovieResponse> {
//     try {
//         const url = new URL('https://api.themoviedb.org/3/movie/popular');
//         url.searchParams.append('language', 'en-US');
//         url.searchParams.append('page', page.toString());
//         if (apiKey) url.searchParams.append('api_key', apiKey);

//         const response = await fetch(url.toString(), {
//             headers: {
//                 ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
//                 'Accept': 'application/json'
//             }
//         });

//         if (!response.ok) {
//             const errorData: TMDBErrorResponse = await response.json();
//             throw new Error(
//                 `Failed to fetch movies: ${errorData.status_message || response.statusText} (Status: ${response.status})`
//             );
//         }

//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching movies:', error);
//         throw error;
//     }
// }

// export async function fetchTMDBTopRatedMovies(page: number = 1): Promise<TMDBMovieResponse> {
//     try {
//         const url = new URL(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`);
//         url.searchParams.append('language', 'en-US');
//         url.searchParams.append('page', page.toString());
//         if (apiKey) url.searchParams.append('api_key', apiKey);

//         const response = await fetch(url.toString(), {
//             headers: {
//                 ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
//                 'Accept': 'application/json'
//             }
//         });

//         if (!response.ok) {
//             const errorData: TMDBErrorResponse = await response.json();
//             throw new Error(
//                 `Failed to fetch movies: ${errorData.status_message || response.statusText} (Status: ${response.status})`
//             );
//         }

//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching movies:', error);
//         throw error;
//     }
// }

// export async function fetchTMDBTvShows(page: number = 1): Promise<TMDBMovieResponse> {
//     try {
//         const url = new URL(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`);
//         url.searchParams.append('language', 'en-US');
//         url.searchParams.append('page', page.toString());
//         if (apiKey) url.searchParams.append('api_key', apiKey);

//         const response = await fetch(url.toString(), {
//             headers: {
//                 ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
//                 'Accept': 'application/json'
//             }
//         });

//         if (!response.ok) {
//             const errorData: TMDBErrorResponse = await response.json();
//             throw new Error(
//                 `Failed to fetch movies: ${errorData.status_message || response.statusText} (Status: ${response.status})`
//             );
//         }

//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching movies:', error);
//         throw error;
//     }
// }

// export async function fetchTMDBPopularArtists(page: number = 1): Promise<TMDBMovieResponse> {
//     try {
//         const url = new URL(`https://api.themoviedb.org/3/person/popular?language=en-US&page=${page}`);
//         url.searchParams.append('language', 'en-US');
//         url.searchParams.append('page', page.toString());
//         if (apiKey) url.searchParams.append('api_key', apiKey);

//         const response = await fetch(url.toString(), {
//             headers: {
//                 ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
//                 'Accept': 'application/json'
//             }
//         });

//         if (!response.ok) {
//             const errorData: TMDBErrorResponse = await response.json();
//             throw new Error(
//                 `Failed to fetch movies: ${errorData.status_message || response.statusText} (Status: ${response.status})`
//             );
//         }

//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching movies:', error);
//         throw error;
//     }
// }

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