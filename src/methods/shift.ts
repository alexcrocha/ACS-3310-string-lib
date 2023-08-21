export const shift = (str: string, num: number = 1) => {
  return str.slice(num, str.length).concat(str.slice(0, num));
}
