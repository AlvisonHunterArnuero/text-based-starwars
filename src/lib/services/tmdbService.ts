import { TMDBMovieResponse, TMDBErrorResponse } from '@/types/tmdb';

const accessToken: string | undefined = process.env.TMDB_API_READ_ACCESS_TOKEN;
const apiKey: string | undefined = process.env.TMDB_API_KEY;

if (!accessToken || !apiKey) {
    throw new Error('TMDB API credentials are not configured');
}

const baseHeaders = {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

async function makeTMDBRequest(url: URL, options?: RequestInit): Promise<TMDBMovieResponse> {
    url.searchParams.append('api_key', apiKey!);

    const response = await fetch(url.toString(), {
        headers: baseHeaders,
        ...options
    });

    if (!response.ok) {
        const errorData: TMDBErrorResponse = await response.json();
        throw new Error(
            `TMDB request failed: ${errorData.status_message || response.statusText} (Status: ${response.status})`
        );
    }

    return response.json();
}

export async function searchMovies(movieName: string): Promise<TMDBMovieResponse> {
    const url = new URL('https://api.themoviedb.org/3/search/movie');
    url.searchParams.append('query', movieName);
    url.searchParams.append('include_adult', 'false');
    url.searchParams.append('language', 'en-US');
    url.searchParams.append('page', '1');

    return makeTMDBRequest(url, {
        next: { revalidate: 86400 } // 24 hours cache
    });
}

export async function getPopularMovies(page: number = 1): Promise<TMDBMovieResponse> {
    const url = new URL('https://api.themoviedb.org/3/movie/popular');
    url.searchParams.append('language', 'en-US');
    url.searchParams.append('page', page.toString());

    return makeTMDBRequest(url);
}

export async function getTopRatedMovies(page: number = 1): Promise<TMDBMovieResponse> {
    const url = new URL('https://api.themoviedb.org/3/movie/top_rated');
    url.searchParams.append('language', 'en-US');
    url.searchParams.append('page', page.toString());

    return makeTMDBRequest(url);
}

export async function getPopularTvShows(page: number = 1): Promise<TMDBMovieResponse> {
    const url = new URL('https://api.themoviedb.org/3/tv/popular');
    url.searchParams.append('language', 'en-US');
    url.searchParams.append('page', page.toString());

    return makeTMDBRequest(url);
}

export async function getPopularArtists(page: number = 1): Promise<TMDBMovieResponse> {
    const url = new URL('https://api.themoviedb.org/3/person/popular');
    url.searchParams.append('language', 'en-US');
    url.searchParams.append('page', page.toString());

    return makeTMDBRequest(url);
}