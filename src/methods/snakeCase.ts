import { justWords } from "./justWords"

export const snakeCase = (str: string) => {
  return justWords(str).replace(/\s/g, '_');
}
