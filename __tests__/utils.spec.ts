import { dig } from '../src/utils'

describe('dig', () => {
  const user = {
    fistName: 'Jon',
    lastName: 'Doe',
    address: {
      country: {
        name: 'United States',
        code: 'US'
      }
    }
  }
  
  it('can access nested value', () => {
    const actual = dig(user, ['address', 'country', 'code'])
    expect(actual).toEqual('US')
  })

  it('returns undefined for non-existing path', () => {
    const actual = dig(user, ['address', 'street', 'number'])
    expect(actual).toEqual(undefined)
  })
})
