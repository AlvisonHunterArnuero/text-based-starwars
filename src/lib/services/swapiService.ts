import { TSwapiFilm } from "@/types/swapi";

export async function getFilms(): Promise<TSwapiFilm> {
    try {
        const response = await fetch('https://swapi.info/api/films');

        if (!response.ok) {
            throw new Error(`SWAPI request failed with status ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching films:', error);
        throw error;
    }
}