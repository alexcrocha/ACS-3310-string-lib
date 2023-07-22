import { capitalize } from '../src'

test('capitalize', () => {
  expect(capitalize('hello')).toBe('Hello')
  expect(capitalize('hello world!')).toBe('Hello world!')
})
