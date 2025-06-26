import {
  render,
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import React from 'react';
import { beforeEach, vi, Mock } from 'vitest';
import { describe, it, expect } from 'vitest';

import * as filmsActions from '../actions/filmsActions';

import FilmsList from './FilmsList';
import '@testing-library/jest-dom/vitest';
import { mockFilm } from './MockData/mockFilm';

vi.mock('../actions/filmsActions');

describe('FilmsList Component', () => {
  beforeEach(() => {
    localStorage.setItem('userName', 'Luke');
    vi.clearAllMocks();
  });

  it('displays loading spinner initially', async () => {
    (
      filmsActions.fetchSWAPIFilms as unknown as Mock
    ).mockResolvedValue(mockFilm);
    render(<FilmsList />);
    expect(
      screen.getByText(/Loading initial films/i)
    ).toBeInTheDocument();
  });

  it('renders films after successful fetch', async () => {
    (
      filmsActions.fetchSWAPIFilms as unknown as Mock
    ).mockResolvedValue(mockFilm);
    render(<FilmsList />);

    await waitFor(() =>
      expect(
        screen.getByText(/Hello Luke, Welcome To StarWars!/)
      ).toBeInTheDocument()
    );

    expect(screen.getByText(/Films Total: 1/)).toBeInTheDocument();
    expect(
      screen.getByText(/Episode 4: A New Hope/)
    ).toBeInTheDocument();
    expect(screen.getByText(/Filter Movies By/i)).toBeInTheDocument();
  });

  it('shows error message on fetch failure', async () => {
    (
      filmsActions.fetchSWAPIFilms as unknown as Mock
    ).mockRejectedValue(new Error('Network error'));
    render(<FilmsList />);

    await waitFor(() =>
      expect(screen.getByText(/Network error/)).toBeInTheDocument()
    );
  });

  it('filters films when sort field is changed', async () => {
    (
      filmsActions.fetchSWAPIFilms as unknown as Mock
    ).mockResolvedValue(mockFilm);
    render(<FilmsList />);

    await waitFor(() => {
      const greeting = screen.getByText(
        /Hello Luke, Welcome To StarWars!/
      );
      expect(greeting).toBeInTheDocument();
    });

    const select = screen.getByRole('combobox');
    fireEvent.mouseDown(select);
    const selectOptions = screen.getByRole('listbox');
    const episodeIdOption = screen.getByRole('option', {
      name: /EPISODE_ID/i,
    });
    fireEvent.click(episodeIdOption);
    const sortDirection = screen.getByRole('button', {
      name: /Sort Direction/i,
    });
    expect(sortDirection).toBeInTheDocument();

    await waitFor(() => {
      expect(select).toBeInTheDocument();
      expect(selectOptions).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText(/EPISODE_ID/));
    expect(screen.getByText(/Filter Movies By/i)).toBeInTheDocument();
  });
});
