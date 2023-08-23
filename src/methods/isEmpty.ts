import { justWords } from "./justWords";

export const isEmpty = (str: string) => {
  return justWords(str) === '';
}
