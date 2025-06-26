This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Star Wars API Demo App

A comprehensive Next.js application that demonstrates integration with multiple movie and entertainment APIs, featuring a Star Wars-themed interface with modern React components and Material-UI design.

## Main Features

### Core Functionality
- **Star Wars Films Browser**: Interactive display of Star Wars films with detailed information
- **Movie Discovery**: Search and browse popular movies, top-rated films, and TV shows
- **Artist Profiles**: Explore popular artists and their filmography
- **Responsive Design**: Mobile-first approach with Material-UI components
- **Dynamic Backgrounds**: Randomized Star Wars-themed backgrounds for immersive experience
- **Welcome Experience**: Personalized user onboarding with name storage

### User Interface
- **Drawer Navigation**: Collapsible sidebar navigation for easy access to different sections
- **Film Cards**: Elegant card-based layout for displaying movie information
- **Welcome Modal**: Interactive welcome screen for new users
- **Animated Components**: Smooth animations using Framer Motion
- **Custom Styling**: Tailwind CSS integration with Material-UI theming

## Dependencies

### Core Framework
- **Next.js 15.3.3**: React framework for production with App Router
- **React 19.0.0**: Latest React version with concurrent features
- **TypeScript 5**: Type-safe development environment

### UI & Styling
- **Material-UI (@mui/material) 7.1.1**: Complete React component library
- **Material-UI Icons (@mui/icons-material) 7.1.1**: Comprehensive icon set
- **Emotion (@emotion/react, @emotion/styled) 11.14.0**: CSS-in-JS styling
- **Tailwind CSS 4**: Utility-first CSS framework
- **Framer Motion 12.18.1**: Production-ready motion library for React

### Development Tools
- **ESLint 9**: Code linting and formatting
- **PostCSS 4**: CSS transformation and optimization
- **TypeScript Definitions**: Type definitions for Node.js, React, and React DOM

## 🌐 API Domains

### 1. SWAPI (Star Wars API)
- **Base URL**: `https://swapi.info/api/`
- **Primary Endpoint**: `/films`
- **Purpose**: Fetch comprehensive Star Wars film data including:
  - Film titles and episode numbers
  - Opening crawl text
  - Director and producer information
  - Release dates
  - Character, planet, starship, and species references

### 2. TMDB (The Movie Database)
- **Base URL**: Configured via environment variables
- **Authentication**: Bearer token + API key authentication
- **Endpoints**:
  - **Search Movies**: `/search/movie` - Search for specific movies
  - **Popular Movies**: `/movie/popular` - Get trending movies
  - **Top Rated Movies**: `/movie/top_rated` - Get highest-rated films
  - **Popular TV Shows**: `/tv/popular` - Get trending TV series
  - **Popular Artists**: `/person/popular` - Get trending actors/actresses

**TMDB Features**:
- Paginated responses for large datasets
- Comprehensive movie metadata (ratings, genres, cast)
- High-quality poster and backdrop images
- Multi-language support (defaulting to English)
- Adult content filtering

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── components/              # Reusable React components
│   │   ├── TMDB_API/           # TMDB-specific components
│   │   ├── DrawerNavigation.tsx # Main navigation component
│   │   ├── FilmCard.tsx        # Individual film display
│   │   ├── FilmsList.tsx       # Films listing component
│   │   └── WelcomeModal.tsx    # User onboarding modal
│   ├── swapi/                  # Star Wars API pages
│   ├── tmdb/                   # TMDB API pages
│   └── layout.tsx              # Root layout with navigation
├── lib/
│   ├── services/               # API service layers
│   │   ├── swapiService.ts     # SWAPI integration
│   │   └── tmdbService.ts      # TMDB integration
│   └── utils/                  # Utility functions and constants
├── types/                      # TypeScript type definitions
├── config/                     # Configuration files
└── _hooks/                     # Custom React hooks
```

## Environment Variables

The application requires the following environment variables for TMDB integration:

```env
TMDB_API_KEY=your_tmdb_api_key
TMDB_API_READ_ACCESS_TOKEN=your_tmdb_read_access_token
NEXT_PUBLIC_TMDB_SEARCH_MOVIES=https://api.themoviedb.org/3/search/movie
NEXT_PUBLIC_TMDB_POPULAR_MOVIES=https://api.themoviedb.org/3/movie/popular
NEXT_PUBLIC_TMDB_TOP_RATED_MOVIES=https://api.themoviedb.org/3/movie/top_rated
NEXT_PUBLIC_TMDB_POPULAR_TV_SHOWS=https://api.themoviedb.org/3/tv/popular
NEXT_PUBLIC_TMDB_POPULAR_ARTISTS=https://api.themoviedb.org/3/person/popular
```

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**:
   Create a `.env.local` file and add your TMDB API credentials

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Open Browser**:
   Navigate to `http://localhost:3000`

## Key Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Error Handling**: Comprehensive error handling for API failures
- **Caching**: Next.js built-in caching for optimal performance
- **Type Safety**: Full TypeScript integration for reliable development
- **Modern UI**: Material Design principles with custom Star Wars theming
- **Performance Optimized**: Image optimization, lazy loading, and efficient data fetching

## Testing

### Test Dependencies

The application uses a modern testing stack built around **Vitest** for fast, reliable unit and component testing:

#### Core Testing Framework
- **Vitest 3.2.4**: Next-generation testing framework with native ESM support and fast execution
- **@vitest/coverage-v8 3.2.4**: Code coverage reporting using V8's built-in coverage
- **Happy-DOM 18.0.1**: Lightweight DOM implementation for server-side testing

#### React Testing Utilities
- **@testing-library/react 16.3.0**: Simple and complete React DOM testing utilities
- **@testing-library/jest-dom 6.6.3**: Custom Jest matchers for DOM node assertions
- **@testing-library/user-event 14.6.1**: Advanced simulation of user interactions

#### Test Configuration
- **vitest.config.ts**: Centralized test configuration with coverage reporting
- **vitest.setup.ts**: Global test setup and DOM testing utilities
- **TypeScript Integration**: Full type safety in test files

### Types of Tests Applied

#### 1. **Component Unit Tests**
Testing individual React components in isolation:

**FilmCard Component Tests:**
* Renders film title and episode number correctly
* Displays formatted release dates
* Shows opening crawl text
* Renders director and producer information
* Displays correct counts for characters, planets, starships, species, and vehicles

**Spinner Component Tests:**
* Renders without crashing
* Displays the correct title prop
* Contains Material-UI CircularProgress component
* Applies correct flexbox styling
* **Snapshot Testing*** Ensures UI consistency over time

#### 2. **Interactive Component Tests**
Testing user interactions and component behavior:

**WelcomeModal Component Tests:**
* Renders welcome message and input prompt
* Shows input field and submit button in correct states
* **State Management**: Button enables/disables based on input validation
* **Event Handling**: Correctly handles form submission with user input
* **Callback Testing**: Verifies `onComplete` callback is called with correct parameters
- **Input Validation**: Prevents submission of whitespace-only input

#### 3. **Snapshot Testing**
Ensuring UI consistency and preventing unintended visual changes:
- **Component Snapshots**: Automated capture of component render output
- **Regression Prevention**: Alerts developers to unexpected UI changes
- **Version Control**: Snapshot files tracked in `__snapshots__/` directories

#### 4. **Accessibility Testing**
Ensuring components meet accessibility standards:
- **Role-based Queries**: Testing components using ARIA roles (`getByRole`)
- **Label Testing**: Verifying proper labeling of form elements (`getByLabelText`)
- **Screen Reader Compatibility**: Ensuring content is accessible to assistive technologies

### Test Scripts

```bash
# Run all tests once
npm run test

# Run tests in watch mode during development
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Coverage Configuration

The test suite generates comprehensive coverage reports in multiple formats:
- **Text**: Terminal output for quick overview
- **JSON**: Machine-readable format for CI/CD integration
- **HTML**: Detailed browser-viewable coverage report

### Mock Data Strategy

The application uses structured mock data for predictable testing:
- **Mock Film Data**: Standardized Star Wars film data for consistent component testing
- **API Response Mocking**: Simulated API responses for service layer testing
- **User Event Simulation**: Realistic user interaction patterns

## Author

**Alvison Hunter** - Full-stack developer specializing in React and Next.js applications.

- [LinkedIn Profile](https://www.linkedin.com/in/alvisonhunter/)
- [Twitter Profile](https://x.com/alvisonhunter)
- [Personal Website](https://alvisonhunter.com)
- [Founder of CodeCraftersLabs](https://codecrafterslabs.com)
---

*This application serves as a demonstration of modern web development practices, API integration, responsive UI design, and comprehensive testing strategies using the latest React ecosystem tools.*


