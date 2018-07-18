import OptionalType from './optional'
import ArrayType from './array'
import { booleanType, dateType, IType, numberType, stringType } from './primitive'
import UnionType from './union'

/**
 * @param {any} typeValue - string representing expected type
 * @returns {IType} parsed type instance
 */
export default function parseType(typeValue: any[]|Object|string): IType {
  if (typeValue instanceof Array) {
    if (typeValue.length !== 2) {
      throw new Error('Array type format is invalid')
    }
    const [childTypeString, isOptional] = typeValue
    const childType = parseType(childTypeString)
    const arrayType = new ArrayType(childType)

    if (isOptional) {
      return new OptionalType(arrayType)
    } else {
      return arrayType
    }
  } else if (typeValue instanceof Object) {
    throw new Error('Cannot parse object')
  } else {
    const parts = (typeValue as string).split('|').map(s => s.trim())

    if (parts.length > 1) {

      const childTypes = parts.map(childType => parseType(childType))
      return new UnionType(childTypes)

    } else if (parts[0].slice(-1) === '?') {

      const childType = parseType(parts[0].slice(0, -1))
      return new OptionalType(childType)

    } else {

      switch (parts[0]) {
        case 'string':
          return stringType
        case 'number':
          return numberType
        case 'boolean':
          return booleanType
        case 'date':
          return dateType
        default:
          throw new Error('Unknown type: ' + parts[0])
      }
    }
  }
}
