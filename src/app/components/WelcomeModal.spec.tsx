import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';

import WelcomeModal from './WelcomeModal';
import '@testing-library/jest-dom/vitest';

describe('WelcomeModal Component', () => {
  it('renders the welcome message and prompt', () => {
    render(<WelcomeModal onComplete={vi.fn()} />);
    expect(
      screen.getByText('Welcome to Our Starwars World!')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Please enter your name to continue')
    ).toBeInTheDocument();
  });

  it('renders input field and submit button', () => {
    render(<WelcomeModal onComplete={vi.fn()} />);
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /enter/i })
    ).toBeDisabled();
  });

  it('enables the button when input is not empty', () => {
    render(<WelcomeModal onComplete={vi.fn()} />);
    const input = screen.getByLabelText('Your Name');
    const button = screen.getByRole('button', { name: /enter/i });

    fireEvent.change(input, { target: { value: 'Luke Skywalker' } });
    expect(button).not.toBeDisabled();
  });

  it('calls onComplete with entered name when submitted', () => {
    const mockOnComplete = vi.fn();
    render(<WelcomeModal onComplete={mockOnComplete} />);

    const input = screen.getByLabelText('Your Name');
    const button = screen.getByRole('button', { name: /enter/i });

    fireEvent.change(input, { target: { value: 'Leia Organa' } });
    fireEvent.click(button);

    expect(mockOnComplete).toHaveBeenCalledTimes(1);
    expect(mockOnComplete).toHaveBeenCalledWith('Leia Organa');
  });

  it('does not call onComplete if input is only whitespace', () => {
    const mockOnComplete = vi.fn();
    render(<WelcomeModal onComplete={mockOnComplete} />);

    const input = screen.getByLabelText('Your Name');
    const button = screen.getByRole('button', { name: /enter/i });

    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(button);

    expect(mockOnComplete).not.toHaveBeenCalled();
  });
});
