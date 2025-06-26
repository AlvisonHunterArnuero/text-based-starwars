import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it, expect } from 'vitest';

import '@testing-library/jest-dom/vitest';
import { Spinner } from './Spinner';

describe('Spinner Component', () => {
  const testTitle = 'Loading...';

  it('renders without crashing', () => {
    render(<Spinner title={testTitle} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('displays the correct title prop', () => {
    render(<Spinner title={testTitle} />);
    expect(screen.getByText(testTitle)).toBeInTheDocument();
  });

  it('contains a Material-UI CircularProgress', () => {
    render(<Spinner title={testTitle} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveClass('MuiCircularProgress-root');
  });

  it('applies correct flexbox styles', () => {
    render(<Spinner title={testTitle} />);
    const box = screen.getByTestId('spinner-box');
    expect(box).toHaveStyle('display: flex');
  });

  it('matches snapshot', () => {
    const { container } = render(<Spinner title={testTitle} />);
    expect(container).toMatchSnapshot();
  });
});
