import { capitalize, allCaps, capitalizeWords } from '../src'

test('capitalize', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('hello world!')).toBe('Hello world!');
});

test('allCaps', () => {
  expect(allCaps('hello')).toBe('HELLO');
  expect(allCaps('hello world!')).toBe('HELLO WORLD!');
});

test('capitalizeWords', () => {
  expect(capitalizeWords('hello')).toBe('Hello');
  expect(capitalizeWords('hello world!')).toBe('Hello World!');
});
