import OptionalType from '../../src/types/optional'
import { stringType } from '../../src/types/primitive'

describe('Optional type', () => {
  it('returns true for valid value of child type', () => {
    const type = new OptionalType(stringType)
    expect(type.isValid('some string')).toEqual(true)
  })

  it('returns false for invalid value of child type', () => {
    const type = new OptionalType(stringType)
    expect(type.isValid(3)).toEqual(false)
  })

  it('returns true for undefined value', () => {
    const type = new OptionalType(stringType)
    expect(type.isValid(undefined)).toEqual(true)
  })
})

