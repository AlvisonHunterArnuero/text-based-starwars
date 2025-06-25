'use client';

import { Box } from '@mui/material';
import * as Sentry from '@sentry/nextjs';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState, useEffect, Suspense } from 'react';

import WelcomeModal from './components/WelcomeModal';

// Separate component for search params usage
function HomeContent() {
  const [showWelcome, setShowWelcome] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get('redirect') || '/swapi';

  useEffect(() => {
    try {
      // Check if user has already entered their name
      const savedName = document.cookie
        .split('; ')
        .find((row) => row.startsWith('userName='))
        ?.split('=')[1];

      if (!savedName) {
        setShowWelcome(true);
      } else {
        router.push(redirectPath);
      }
    } catch (error) {
      Sentry.captureException(error);
      console.error('Error in HomeContent:', error);
    }
  }, [router, redirectPath]);

  const handleComplete = (name: string) => {
    try {
      // Set cookie and redirect
      document.cookie = `userName=${encodeURIComponent(
        name
      )}; path=/; max-age=31536000`;
      router.push(redirectPath);
    } catch (error) {
      Sentry.captureException(error);
      console.error('Error in handleComplete:', error);
    }
  };

  return (
    <main>
      {showWelcome && <WelcomeModal onComplete={handleComplete} />}
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<Box color={'red'}>Loading...</Box>}>
      <HomeContent />
    </Suspense>
  );
}
