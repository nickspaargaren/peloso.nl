export const plural = (amount: number, text: string): string => {
  if (amount === 0) {
    return '';
  }

  return amount === 1 ? `${amount} ${text}` : `${amount} ${text}s`;
};
