export const fillMovieAverageByRateValue = (rating: string) => {
    if (+rating >= 8) return 'primary';
    if (+rating >= 7) return 'success';
    if (+rating >= 5) return 'info';
    if (+rating >= 3) return 'warning';
    return 'error';
};