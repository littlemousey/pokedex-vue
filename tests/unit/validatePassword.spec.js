import { checksOnLength } from '@/utils/validatePassword'

// beforeEach(() => {

// });

describe('password characteristics', () => {
  it('should consist of less than 32 characters', () => {
    const rightPassword = 'aabc111'
    const wrongPassword = 'jdfnkjiiasldnflsafnasdlkOdflasdklj233'

    let password = checksOnLength(rightPassword)
    expect(password).toBe(true)

    password = checksOnLength(wrongPassword)
    expect(password).toBe(false)
  })
})
