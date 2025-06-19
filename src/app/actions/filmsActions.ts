'use server'

import { TSwapiFilm } from "@/types/swapi";

export async function fetchSWAPIFilms(): Promise<TSwapiFilm> {
    try {
        const response = await fetch(
            `https://swapi.info/api/films`
        );

        if (!response.ok) {
            throw new Error(
                `SWAPI request failed with status ${response.status}`
            );
        }
        const data: TSwapiFilm = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching films:', error);
        throw error;
    }
}
