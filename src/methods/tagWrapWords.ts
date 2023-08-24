import { justWords } from "./justWords";

export const tagWrapWords = (str: string, tag: string) => {
  return justWords(str).split(' ').map(word => `<${tag}>${word}</${tag}>`).join(' ');
}
