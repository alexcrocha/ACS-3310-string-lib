import { onlyWords } from "./onlyWords";
import { capitalize } from "./capitalize";

export const camelCase = (str: string) => {
  const words = onlyWords(str).split(' ');
  const firstWord = words.shift();
  const restOfWords = words.map(word => capitalize(word));
  return [firstWord, ...restOfWords].join('');
}
