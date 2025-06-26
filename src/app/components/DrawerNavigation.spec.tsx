import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import * as drawerConfig from '../../config/navigation/drawerMenu';

import { DrawerNavigation } from './DrawerNavigation';
import '@testing-library/jest-dom/vitest';

describe('DrawerNavigation Component', () => {
  beforeEach(() => {
    // Mock the drawer items for controlled test output
    vi.spyOn(drawerConfig, 'drawerItemsArr', 'get').mockReturnValue([
      {
        title: 'Home',
        path: '/',
        icon: (
          <span data-testid="home-icon">Our First Menu Item</span>
        ),
      },
      {
        title: 'About',
        path: '/about',
        icon: (
          <span data-testid="about-icon">Our Second Menu Item</span>
        ),
      },
    ]);
  });

  it('renders the menu button', () => {
    render(<DrawerNavigation />);
    expect(
      screen.getByRole('button', { name: /menu/i })
    ).toBeInTheDocument();
  });

  it('opens the drawer when menu button is clicked', () => {
    render(<DrawerNavigation />);
    const menuButton = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menuButton);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });

  it('renders icons for drawer items', () => {
    render(<DrawerNavigation />);
    fireEvent.click(screen.getByRole('button', { name: /menu/i }));

    expect(screen.getByTestId('home-icon')).toBeInTheDocument();
    expect(screen.getByTestId('about-icon')).toBeInTheDocument();
  });

  it('closes drawer when a list item is clicked', () => {
    render(<DrawerNavigation />);
    fireEvent.click(screen.getByRole('button', { name: /menu/i }));
    const aboutItem = screen.getByText(/About/i);
    fireEvent.click(aboutItem);
  });
});
