import { capitalize } from './capitalize';

export const capitalizeHeadline = (str: string) => {
  const exceptions = ['the', 'in', 'a', 'an', 'and', 'but', 'for', 'at', 'by', 'from'];
  const words = str.split(' ');
  const headlineWords = words.map((word, index) => {
    if (index !== 0 && exceptions.includes(word)) {
      return word;
    } else {
      return capitalize(word);
    }
  });
  return headlineWords.join(' ');
}
