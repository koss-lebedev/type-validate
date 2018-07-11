# Type-validate

Check an object against predefined schema.

## Example

Sample typings definition:

```js
{
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

It supports:

* primitive types - `string`, `number`, `boolean`, `date`, and `undefined`
* optional types, defined with `?`
* union types, defined with `|`
* array types, defined as `[arrayItemType, canArrayBeUndefined]`
