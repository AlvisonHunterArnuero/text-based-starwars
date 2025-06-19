import { useState, useMemo } from 'react';

import { SortField, SortDirection } from '@/types/hooks';
import { TSwapiFilmsResponse } from '@/types/swapi';

export function useFilmSort(initialFilms: TSwapiFilmsResponse) {
    const [sortField, setSortField] = useState<SortField>('episode_id');
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

    const sortedFilms = useMemo(() => {
        return [...initialFilms].sort((a, b) => {
            let comparison = 0;

            switch (sortField) {
                case 'title':
                    comparison = a.title.localeCompare(b.title);
                    break;
                case 'episode_id':
                    comparison = a.episode_id - b.episode_id;
                    break;
                case 'characters':
                    comparison = a.characters.length - b.characters.length;
                        break;
                case 'producer':
                    const aProducer = a.producer.split(',')[0].trim();
                    const bProducer = b.producer.split(',')[0].trim();
                    comparison = aProducer.localeCompare(bProducer);
                    break;
            }

            return sortDirection === 'asc' ? comparison : -comparison;
        });
    }, [initialFilms, sortField, sortDirection]);

    const toggleSortDirection = () => {
        setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    };

    return {
        sortedFilms,
        sortField,
        setSortField,
        sortDirection,
        toggleSortDirection,
    };
}