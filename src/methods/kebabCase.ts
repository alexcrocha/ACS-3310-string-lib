import { justWords } from "./justWords";

export const kebabCase = (str: string) => {
  return justWords(str).replace(/\s/g, '-');
}
