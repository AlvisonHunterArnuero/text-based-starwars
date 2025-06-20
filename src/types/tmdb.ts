export interface TMDBMovie {
    adult: boolean
    backdrop_path: string | null
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string | null
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
export interface TMDBMovieResponse {
    page: number
    results: TMDBMovie[]
    total_pages: number
    total_results: number
}

export interface TMDBMovieDetails extends TMDBMovie {
    budget: number;
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string | null;
    imdb_id: string | null;
    production_companies: {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    revenue: number;
    runtime: number | null;
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    tagline: string | null;
    belongs_to_collection: null | {
        id: number;
        name: string;
        poster_path: string | null;
        backdrop_path: string | null;
    };
}

export interface TMDBErrorResponse {
    status_code: number;
    status_message: string;
    success: boolean;
  }


export interface TMDBKnownFor {
    backdrop_path: string | null;
    id: number;
    title?: string; // For movies
    name?: string; // For TV shows
    original_title?: string; // For movies
    original_name?: string; // For TV shows
    overview: string;
    poster_path: string | null;
    media_type: 'movie' | 'tv';
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date?: string; // For movies
    first_air_date?: string; // For TV shows
    video?: boolean;
    vote_average: number;
    vote_count: number;
    origin_country?: string[]; // For TV shows
}

export interface TMDBPopularArtist {
    adult: boolean;
    gender: number; // 1 for female, 2 for male
    id: number;
    backdrop_path: string | null;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    known_for: TMDBKnownFor[];
}

export interface TMDBPopularArtistsResponse {
    page: number;
    results: TMDBPopularArtist[];
    total_pages: number;
    total_results: number;
  }



