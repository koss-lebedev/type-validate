# Type-validate

Check an object against predefined schema.

## Installation

Using npm:

```
npm i -S type-validate
```

Using yarn:

```
yarn add type-validate
```

## Example

Sample typings definition:

```js
const typings = {
  name: 'string',
  age: 'number',
  height: 'number?',
  isDeveloper: 'boolean',
  birthDate: 'date|number',
  address: {
    country: 'string?',
    city: 'string',
  },
  posts: [{
    title: 'string'
  }, true],
}
```

## Supported types

* primitive types - `string`, `number`, `boolean`, `date`, and `undefined`
* optional types, defined with `?`, like `string?`
* union types, defined with `|`, like `string|number`
* array types, defined as `[arrayItemType, isOptional]`
