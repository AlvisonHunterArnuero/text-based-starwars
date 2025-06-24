'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';

import WelcomeModal from './components/WelcomeModal';

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get('redirect') || '/swapi';

  useEffect(() => {
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
  }, [router, redirectPath]);

  const handleComplete = (name: string) => {
    // Set cookie and redirect
    document.cookie = `userName=${encodeURIComponent(
      name
    )}; path=/; max-age=31536000`;
    router.push(redirectPath);
  };
  return (
    <main>
      {showWelcome && <WelcomeModal onComplete={handleComplete} />}
    </main>
  );
}
