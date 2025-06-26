import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it, expect } from 'vitest';

import { FilmCard } from './FilmCard';
import '@testing-library/jest-dom/vitest';
import { mockFilm } from './MockData/mockFilm';

describe('FilmCard Component', () => {
  it('renders film title and episode number', () => {
    render(<FilmCard film={mockFilm} ndx={0} />);
    expect(
      screen.getByText(/Episode 4: A New Hope/i)
    ).toBeInTheDocument();
  });

  it('renders release date correctly', () => {
    render(<FilmCard film={mockFilm} ndx={0} />);
    expect(
      screen.getByText(/Released: 5\/24\/1977/)
    ).toBeInTheDocument(); // MM/DD/YYYY (locale-based)
  });

  it('renders opening crawl', () => {
    render(<FilmCard film={mockFilm} ndx={0} />);
    expect(
      screen.getByText(/It is a period of civil war/i)
    ).toBeInTheDocument();
  });

  it('renders director and producer info', () => {
    render(<FilmCard film={mockFilm} ndx={0} />);
    expect(
      screen.getByText(/Director: George Lucas/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Producer: Gary Kurtz, Rick McCallum/i)
    ).toBeInTheDocument();
  });

  it('renders chips with correct counts', () => {
    render(<FilmCard film={mockFilm} ndx={0} />);
    expect(screen.getByText(/Characters: 10/)).toBeInTheDocument();
    expect(screen.getByText(/Planets: 5/)).toBeInTheDocument();
    expect(screen.getByText(/Starships: 3/)).toBeInTheDocument();
    expect(screen.getByText(/Species: 4/)).toBeInTheDocument();
    expect(screen.getByText(/Vehicles: 2/)).toBeInTheDocument();
  });
});
