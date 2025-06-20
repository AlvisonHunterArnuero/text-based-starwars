export const fillMovieAverageByRateValue = (rating: string) => {
    if (+rating >= 8) return 'primary';
    if (+rating >= 7) return 'success';
    if (+rating >= 5) return 'info';
    if (+rating >= 3) return 'warning';
    return 'error';
};

export const popularLanguages = [
    { lang: 'en', emoji: '🇺🇸', name: 'English' },
    { lang: 'ko', emoji: '🇰🇷', name: 'Korean' },
    { lang: 'zh', emoji: '🇨🇳', name: 'Chinese' },
    { lang: 'tr', emoji: '🇹🇷', name: 'Turkish' },
    { lang: 'fr', emoji: '🇫🇷', name: 'French' },
    { lang: 'it', emoji: '🇮🇹', name: 'Italian' },
    { lang: 'es', emoji: '🇪🇸', name: 'Spanish' },
    { lang: 'de', emoji: '🇩🇪', name: 'German' },
    { lang: 'ja', emoji: '🇯🇵', name: 'Japanese' },
    { lang: 'ru', emoji: '🇷🇺', name: 'Russian' },
    { lang: 'pt', emoji: '🇵🇹', name: 'Portuguese' },
    { lang: 'hi', emoji: '🇮🇳', name: 'Hindi' },
    { lang: 'ar', emoji: '🇸🇦', name: 'Arabic' },
    { lang: 'el', emoji: '🇬🇷', name: 'Greek' },
    { lang: 'th', emoji: '🇹🇭', name: 'Thai' }
] as const;

export type PopularLanguage = typeof popularLanguages[number];