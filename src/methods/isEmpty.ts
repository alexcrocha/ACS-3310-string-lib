import { onlyWords } from "./onlyWords";

export const isEmpty = (str: string) => {
  return onlyWords(str) === '';
}
