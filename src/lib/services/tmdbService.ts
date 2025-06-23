import { TMDBMovieResponse, TMDBErrorResponse, TMDBPopularArtistsResponse } from '@/types/tmdb';

import { TMBD_ACCESS_TOKEN, TMDB_API_KEY, TMDB_ENDPOINTS } from '../utils/constants';

if (!TMBD_ACCESS_TOKEN || !TMDB_API_KEY) {
    throw new Error('TMDB API credentials are not configured');
}

const baseHeaders = {
    'Authorization': `Bearer ${TMBD_ACCESS_TOKEN}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

async function makeTMDBRequest(url: URL, options?: RequestInit): Promise<TMDBMovieResponse> {
    url.searchParams.append('api_key', TMDB_API_KEY!);

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
    const url = new URL(TMDB_ENDPOINTS.SEARCH_MOVIES);
    url.searchParams.append('query', movieName);
    url.searchParams.append('include_adult', 'false');
    url.searchParams.append('language', 'en-US');
    url.searchParams.append('page', '1');

    return makeTMDBRequest(url, {
        next: { revalidate: 86400 } // 24 hours cache
    });
}

export async function getPopularMovies(page: number = 1): Promise<TMDBMovieResponse> {
    const url = new URL(TMDB_ENDPOINTS.POPULAR_MOVIES);
    url.searchParams.append('language', 'en-US');
    url.searchParams.append('page', page.toString());

    return makeTMDBRequest(url);
}

export async function getTopRatedMovies(page: number = 1): Promise<TMDBMovieResponse> {
    const url = new URL(TMDB_ENDPOINTS.TOP_RATED_MOVIES);
    url.searchParams.append('language', 'en-US');
    url.searchParams.append('page', page.toString());

    return makeTMDBRequest(url);
}

export async function getPopularTvShows(page: number = 1): Promise<TMDBMovieResponse> {
    const url = new URL(TMDB_ENDPOINTS.POPULAR_TV_SHOWS);
    url.searchParams.append('language', 'en-US');
    url.searchParams.append('page', page.toString());

    return makeTMDBRequest(url);
}

export async function getPopularArtists(page: number = 1): Promise<TMDBPopularArtistsResponse> {
    const url = new URL(TMDB_ENDPOINTS.POPULAR_ARTISTS);
    url.searchParams.append('language', 'en-US');
    url.searchParams.append('page', page.toString());

    const response = await fetch(url.toString(), {
        headers: baseHeaders,
    });

    if (!response.ok) {
        const errorData: TMDBErrorResponse = await response.json();
        throw new Error(
            `TMDB request failed: ${errorData.status_message || response.statusText} (Status: ${response.status})`
        );
    }

    return response.json();
}