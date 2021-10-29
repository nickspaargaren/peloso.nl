const plural = (amount, text) => {
  if (amount === 0) {
    return '';
  }

  return amount === 1 ? `${amount} ${text}` : `${amount} ${text}s`;
};

export default plural;
