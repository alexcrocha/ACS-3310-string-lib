import { onlyWords } from "./onlyWords"

export const snakeCase = (str: string) => {
  return onlyWords(str).replace(/\s/g, '_');
}
