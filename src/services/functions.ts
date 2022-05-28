export const substringText = (text: string, nbMax: number): string => {
  if (text && text.length > nbMax) {
    return `${text.substring(0, nbMax)}... `;
  }
  return text;
};
