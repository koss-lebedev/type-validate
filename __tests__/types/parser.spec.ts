import parse from '../../src/types/parser'
import { PrimitiveType } from '../../src/types/primitive'
import OptionalType from '../../src/types/optional'
import UnionType from '../../src/types/union'
import ArrayType from '../../src/types/array'

describe('Parser', () => {
  it('parses string type', () => {
    const type = parse('string')
    expect(type instanceof PrimitiveType).toBe(true)
  })

  it('parses number type', () => {
    const type = parse('number')
    expect(type instanceof PrimitiveType).toBe(true)
  })

  it('parses boolean type', () => {
    const type = parse('boolean')
    expect(type instanceof PrimitiveType).toBe(true)
  })

  it('parses optional type', () => {
    const type = parse('string?')
    expect(type instanceof OptionalType).toBe(true)
  })

  it('parses union type', () => {
    const type = parse('string|number')
    expect(type instanceof UnionType).toBe(true)
  })

  it('parses array of primitive type', () => {
    const type = parse(['string', false])
    expect(type instanceof ArrayType).toBe(true)
  })
})
