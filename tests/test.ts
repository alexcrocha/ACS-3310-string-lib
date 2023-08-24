import {
  capitalize,
  allCaps,
  capitalizeWords,
  capitalizeHeadline,
  removeExtraSpaces,
  kebabCase,
  justWords,
  snakeCase,
  camelCase,
  shift,
  makeHashTag,
  isEmpty,
  tagWrapWords,
} from '../src';

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

test('justWords', () => {
  expect(justWords('hello')).toBe('hello');
  expect(justWords('hello-world!')).toBe('hello world');
  expect(justWords(' hello_world! again')).toBe('hello world again');
  expect(justWords('@#*(&^%$hello.world')).toBe('hello world');
});

test('kebabCase', () => {
  expect(kebabCase('hello')).toBe('hello');
  expect(kebabCase('hello world!')).toBe('hello-world');
  expect(kebabCase(' hello-world!')).toBe('hello-world');
  expect(kebabCase('hello_world! again')).toBe('hello-world-again');
  expect(kebabCase('hello.world@email.me')).toBe('hello-world-email-me');
});

test('snakeCase', () => {
  expect(snakeCase('hello')).toBe('hello');
  expect(snakeCase(' hello-world!')).toBe('hello_world');
  expect(snakeCase('hello_world! again')).toBe('hello_world_again');
  expect(snakeCase('hello.world@email.me')).toBe('hello_world_email_me');
});

test('camelCase', () => {
  expect(camelCase('hello')).toBe('hello');
  expect(camelCase(' hello-world!')).toBe('helloWorld');
  expect(camelCase('hello_world! again')).toBe('helloWorldAgain');
  expect(camelCase('hello.world')).toBe('helloWorld');
  expect(camelCase('hello.world.email.me')).toBe('helloWorldEmailMe');
});

test('shift', () => {
  expect(shift('Hello World')).toBe('ello WorldH');
  expect(shift('Hello World', 2)).toBe('llo WorldHe');
  expect(shift('Hello World', 5)).toBe(' WorldHello');
});

test('makeHashTag', () => {
  expect(makeHashTag('Hello    beautiful\nworld')).toEqual([
    '#beautiful',
    '#hello',
    '#world',
  ]);
  expect(makeHashTag('Oh my beautiful world, how I love thee')).toEqual([
    '#beautiful',
    '#world',
    '#love',
  ]);
  expect(makeHashTag('Hello hello hello')).toEqual([
    '#hello',
  ]);
});

test('isEmpty', () => {
  expect(isEmpty('')).toBe(true);
  expect(isEmpty('\n  \t')).toBe(true);
  expect(isEmpty('hello')).toBe(false);
  expect(isEmpty(' hello \vworld ')).toBe(false);
});

test('tagWrapWords', () => {
  expect(tagWrapWords('Hello world', 'span'))
    .toBe('<span>Hello</span> <span>world</span>');
  expect(tagWrapWords('Hello hello hello', 'div'))
    .toBe('<div>Hello</div> <div>hello</div> <div>hello</div>');
  expect(tagWrapWords('Oh my beautiful world, how I love thee', 'p'))
    .toBe('<p>Oh</p> <p>my</p> <p>beautiful</p> <p>world</p> <p>how</p> <p>I</p> <p>love</p> <p>thee</p>');
});
