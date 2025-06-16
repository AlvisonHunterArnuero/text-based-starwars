'use client';
import React, { useState, useEffect } from 'react';
import WelcomeModal from './components/WelcomeModal';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user has already entered their name
    const savedName = localStorage.getItem('userName');
    if (!savedName) {
      setShowWelcome(true);
      router.push('/');
    } else {
      router.push('/swapi');
    }
  }, [router]);

  const handleComplete = (name: string) => {
    setShowWelcome(false);
    localStorage.setItem('userName', name);
  };
  return (
    <main>
      {showWelcome && <WelcomeModal onComplete={handleComplete} />}
    </main>
  );
}
