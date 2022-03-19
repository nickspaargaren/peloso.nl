export const plural = (amount: number, text: 'month' | 'year'): string => {
  if (amount === 0) {
    return '';
  }

  return amount === 1 ? `${amount} ${text}` : `${amount} ${text}s`;
};
