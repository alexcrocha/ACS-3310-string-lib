# String Manipulation Library

This library provides a collection of string manipulation functions to transform and analyze text. It includes various functions for capitalization, casing, whitespace removal, shifting, and more.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)

## Installation

```bash
npm install ar-string-lib
```

## Usage

Import the functions you need and use them in your project.

```javascript
import { allCaps, camelCase } from 'ar-string-lib';

const text = 'hello world';
console.log(allCaps(text)); // Output: 'HELLO WORLD'
console.log(camelCase(text)); // Output: 'helloWorld'
```

## Functions

`allCaps(str: string): string`

Converts the input string to all uppercase letters.

`camelCase(str: string): string`

Converts the input string to camel case.

`capitalize(str: string): string`

Capitalizes the first letter of the input string.

`capitalizeHeadline(str: string): string`

Capitalizes the first letter of each significant word in a headline.

`capitalizeWords(str: string): string`

Capitalizes the first letter of each word in the input string.

`isEmpty(str: string): boolean`

Checks if the input string is empty or only consists of whitespace.

`kebabCase(str: string): string`

Converts the input string to kebab case.

`makeHashTag(str: string): string[]`

Converts the three longest words of the input string into an array of hashtags.

`onlyWords(str: string): string`

Removes any non-word characters from the input string.

`removeExtraSpaces(str: string): string`

Removes extra spaces from the input string.

`shift(str: string, n?: number): string`

Shifts the first n characters of the input string to the end of the string.

`snakeCase(str: string): string`

Converts the input string to snake case.

`tagWrapWords(str: string, tagName: string): string`

Wraps each word of the input string with the specified HTML tag.
