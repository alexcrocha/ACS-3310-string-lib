import { removeExtraSpaces } from "./removeExtraSpaces";

export const justWords = (str: string) => {
  return removeExtraSpaces(str.replace(/[^a-zA-Z ]/g, " "));
}
