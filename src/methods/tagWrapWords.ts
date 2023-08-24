import { onlyWords } from "./onlyWords";

export const tagWrapWords = (str: string, tag: string) => {
  return onlyWords(str).split(' ').map(word => `<${tag}>${word}</${tag}>`).join(' ');
}
