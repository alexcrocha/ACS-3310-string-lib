import { removeExtraSpaces } from "./removeExtraSpaces"

export const kebabCase = (str: string) => {
  const string = str.replace(/[^a-zA-Z ]/g, " ").toLowerCase();
  return removeExtraSpaces(string).replace(/\s/g, '-');
}
