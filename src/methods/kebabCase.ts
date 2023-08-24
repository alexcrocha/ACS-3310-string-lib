import { onlyWords } from "./onlyWords";

export const kebabCase = (str: string) => {
  return onlyWords(str).replace(/\s/g, '-');
}
