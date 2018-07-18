import ArrayType from '../../src/types/array'
import { stringType } from '../../src/types/primitive'

describe('ArrayType', () => {
  it('returns true if all items are valid', () => {
    const type = new ArrayType(stringType)
    expect(type.isValid(['first', 'second', 'third'])).toEqual(true)
  })

  it('returns false if at least one item is invalid', () => {
    const type = new ArrayType(stringType)
    expect(type.isValid(['first', 'second', 3])).toEqual(false)
  })
})
