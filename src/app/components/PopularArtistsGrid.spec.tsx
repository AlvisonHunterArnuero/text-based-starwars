import { render, screen, within } from '@testing-library/react';
import React from 'react';
import { describe, it, expect } from 'vitest';

import { mockArtists } from './MockData/mockPopularArtists';
import PopularArtistsGrid from './PopularArtistsGrid';
import '@testing-library/jest-dom/vitest';

describe('PopularArtistsGrid Component', () => {
  it('renders without crashing', () => {
    render(<PopularArtistsGrid movies={mockArtists} />);
    expect(screen.getByText('Popular Artists')).toBeInTheDocument();
  });

  it('displays "No movies found" when empty array is passed', () => {
    render(<PopularArtistsGrid movies={[]} />);
    expect(
      screen.getByText('No movies found with that name.')
    ).toBeInTheDocument();
  });

  it('renders correct number of artist cards', () => {
    render(<PopularArtistsGrid movies={mockArtists} />);
    const cards = screen.getAllByRole('article');
    expect(cards).toHaveLength(mockArtists.length);
  });

  it('displays correct artist information', () => {
    render(<PopularArtistsGrid movies={mockArtists} />);

    // Test first artist
    expect(
      screen.getByText('Scarlett Johansson')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Scarlett Johansson')
    ).toBeInTheDocument();
    expect(screen.getByText('Acting')).toBeInTheDocument();
    expect(screen.getByText('85.5 ★')).toBeInTheDocument();

    // Test second artist
    expect(screen.getByText('Sandra Bullock')).toBeInTheDocument();
    expect(screen.getByText('Directing')).toBeInTheDocument();
  });

  it('displays correct gender icon', () => {
    render(<PopularArtistsGrid movies={mockArtists} />);

    // Male icon for gender 1
    const maleChip = screen
      .getAllByText('GENDER')[0]
      .closest('.MuiChip-root');
    expect(maleChip).toHaveTextContent('GENDER');
    expect(maleChip?.querySelector('svg')).toBeInTheDocument(); // MaleIcon
  });

  it('renders known for items correctly', () => {
    render(<PopularArtistsGrid movies={mockArtists} />);

    const knownForSections = screen.getAllByText('Known For:');
    expect(knownForSections).toHaveLength(mockArtists.length);

    const firstArtistKnownFor = within(
      knownForSections[0].closest('.MuiImageList-root')!
    );
    expect(
      firstArtistKnownFor.getByAltText('Lucy')
    ).toBeInTheDocument();
  });

  it('applies correct styling to cards', () => {
    render(<PopularArtistsGrid movies={mockArtists} />);

    const firstCard = screen.getAllByRole('article')[0];
    expect(firstCard).toHaveStyle('display: flex');
    expect(firstCard).toHaveStyle('flex-direction: row');
  });

  it('matches snapshot with mock data', () => {
    const { container } = render(
      <PopularArtistsGrid movies={mockArtists} />
    );
    expect(container).toMatchSnapshot();
  });
});
