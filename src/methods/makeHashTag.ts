import { onlyWords } from "./onlyWords";

export const makeHashTag = (str: string) => {
  const uniqueWords = new Set(onlyWords(str.toLowerCase()).split(' '));
  const longestThreeWords = Array.from(uniqueWords).sort((a, b) => b.length - a.length).slice(0, 3);
  const hashTags = longestThreeWords.map((word) => `#${word}`);
  return hashTags;
}
