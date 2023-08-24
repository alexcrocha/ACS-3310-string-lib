import { removeExtraSpaces } from "./removeExtraSpaces";

export const onlyWords = (str: string) => {
  return removeExtraSpaces(str.replace(/[^a-zA-Z ]/g, " "));
}
