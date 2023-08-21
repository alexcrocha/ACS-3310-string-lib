import { capitalize } from './capitalize';

export const capitalizeWords = (str: string) => {
  return str.split(' ').map(word => capitalize(word)).join(' ');
}
