import {
    validatePassword,
    checksOnLength,
    checkOnLowerCase,
} from '@/utils/validatePassword'

let rightPassword, wrongPassword, masterPassword

beforeEach(() => {
    rightPassword = 'aabc111'
    wrongPassword = 'jdfnkjiiasldnflsaFnasdlkOdflasdklj233'
    masterPassword = 'pokemonmaster'
})

describe('password characteristics', () => {
    it('should ignore all checks if master password is used', () => {
        let inputPassword = validatePassword(masterPassword)
        expect(inputPassword).toBe(true)
    })

    it('should consist of less than 32 characters', () => {
        let inputPassword = checksOnLength(rightPassword)
        expect(inputPassword).toBe(true)

        inputPassword = checksOnLength(wrongPassword)
        expect(inputPassword).toBe(false)
    })

    it('should not consist of capital letters', () => {
        let inputPassword = checkOnLowerCase(wrongPassword)
        expect(inputPassword).toBe(false)

        inputPassword = checkOnLowerCase(rightPassword)
        expect(inputPassword).toBe(true)
    })
})
