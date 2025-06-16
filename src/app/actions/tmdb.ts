import { TMDBMovieResponse, TMDBErrorResponse } from '@/types/tmdb';

const accessToken = process.env.TMDB_API_READ_ACCESS_TOKEN || "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDEzMmQwMmM3MmVkM2Y4OTQ2YWQxMzE4ODJhMzVhZCIsIm5iZiI6MTc0OTYxNjY4MC43MDcsInN1YiI6IjY4NDkwODI4MjcxMjUzNGEyNDFlYjNlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8VmxaCiHWFg_lsRiBiqvUasGRz2qNbo6NTJtTaOwfq8";
const apiKey = process.env.TMDB_API_KEY;

if (!accessToken && !apiKey) {
    console.error('TMDB API credentials are not configured');
    throw new Error('TMDB API credentials are not configured');
}

export async function fetchTMDBMovies(movieName: string): Promise<TMDBMovieResponse> {
    try {
        const url = new URL(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`);
        if (apiKey) url.searchParams.append('api_key', apiKey);

        const response = await fetch(url.toString(), {
            method: 'GET',
            headers: {
                ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            next: {
                revalidate: 86400 // 24 hours cache
            }
        });

        if (!response.ok) {
            const errorData: TMDBErrorResponse = await response.json();
            throw new Error(
                `TMDB request failed: ${errorData.status_message || response.statusText} (Status: ${response.status})`
            );
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching movie from TMDB:', error);
        throw new Error(
            error instanceof Error
                ? error.message
                : 'Failed to fetch movie data from TMDB'
        );
    }
}

export async function fetchTMDBPopularMovies(page: number = 1): Promise<TMDBMovieResponse> {
    try {
        const url = new URL('https://api.themoviedb.org/3/movie/popular');
        url.searchParams.append('language', 'en-US');
        url.searchParams.append('page', page.toString());
        if (apiKey) url.searchParams.append('api_key', apiKey);

        const response = await fetch(url.toString(), {
            headers: {
                ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData: TMDBErrorResponse = await response.json();
            throw new Error(
                `Failed to fetch movies: ${errorData.status_message || response.statusText} (Status: ${response.status})`
            );
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
}