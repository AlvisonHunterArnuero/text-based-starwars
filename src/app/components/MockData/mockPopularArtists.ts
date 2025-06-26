import { TMDBPopularArtist } from "@/types/tmdb";

export const mockArtists: TMDBPopularArtist[] = [
    {
        id: 1,
        name: 'Scarlett Johansson',
        original_name: 'Scarlett Johansson',
        popularity: 85.5,
        gender: 1,
        known_for_department: 'Acting',
        profile_path: '/test-profile1.jpg',
        known_for: [
            {
                id: 101,
                title: 'Lucy',
                name: 'Series 1',
                poster_path: '/poster1.jpg',
                media_type: 'movie',
                backdrop_path: null,
                overview: '',
                adult: false,
                original_language: '',
                genre_ids: [],
                popularity: 0,
                vote_average: 0,
                vote_count: 0
            },
        ],
        adult: false,
        backdrop_path: null
    },
    {
        id: 2,
        name: 'Sandra Bullock',
        original_name: 'Sandra Bullock',
        popularity: 72.3,
        gender: 2,
        known_for_department: 'Directing',
        profile_path: '/test-profile2.jpg',
        known_for: [
            {
                id: 102,
                title: 'Gravity',
                name: 'Series 2',
                poster_path: '/poster2.jpg',
                media_type: 'tv',
                backdrop_path: null,
                overview: '',
                adult: false,
                original_language: '',
                genre_ids: [],
                popularity: 0,
                vote_average: 0,
                vote_count: 0
            },
        ],
        adult: false,
        backdrop_path: null
    },
];