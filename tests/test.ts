import { capitalize, allCaps, capitalizeWords, capitalizeHeadline, removeExtraSpaces } from '../src';

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

test('capitalizeHeadline', () => {
  expect(capitalizeHeadline('the most foo in bar')).toBe('The Most Foo in Bar');
  expect(capitalizeHeadline('in the rear with the gear')).toBe('In the Rear With the Gear');
});

test('removeExtraSpaces', () => {
  expect(removeExtraSpaces('  hello     world!  ')).toBe('hello world!');
  expect(removeExtraSpaces('\thello\f\v\rworld!  \n')).toBe('hello world!');
});
