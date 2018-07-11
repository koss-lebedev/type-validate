import UnionType from '../../src/types/union'
import { stringType, numberType } from '../../src/types/primitive'

describe('UnionType', () => {
  it('returns true if first child type is valid', () => {
    const type = new UnionType([stringType, numberType])
    expect(type.isValid('some string')).toEqual(true)
  })

  it('returns true if second child type is valid', () => {
    const type = new UnionType([stringType, numberType])
    expect(type.isValid(3)).toEqual(true)
  })

  it('returns false if none of the child types are valid', () => {
    const type = new UnionType([stringType, numberType])
    expect(type.isValid(true)).toEqual(false)
  })
})
