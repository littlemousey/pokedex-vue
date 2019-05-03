import {
    validatePassword,
    checksOnLength,
    checkOnLowerCase,
    checkOnForbiddenLetters,
    checksOnConsecutiveLetters,
    checksOnPairsOfLetters,
} from '@/utils/validatePassword'

let rightPassword, wrongPassword, masterPassword

beforeEach(() => {
    rightPassword = 'aabcppfsdlj'
    wrongPassword = 'jdfnkjiiasldnflsaFnkOdfl_asdk233!'
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

    it('should not consist of other characters than lower case letters', () => {
        let inputPassword = checkOnLowerCase(wrongPassword)
        expect(inputPassword).toBe(false)

        inputPassword = checkOnLowerCase(rightPassword)
        expect(inputPassword).toBe(true)
    })

    it('should not contain the letter i', () => {
        let inputPassword = checkOnForbiddenLetters(wrongPassword)
        expect(inputPassword).toBe(false)

        inputPassword = checkOnForbiddenLetters(rightPassword)
        expect(inputPassword).toBe(true)
    })

    it('should contain consecutive letters', () => {
        let inputPassword = checksOnConsecutiveLetters(wrongPassword)
        expect(inputPassword).toBe(false)

        inputPassword = checksOnConsecutiveLetters(rightPassword)
        expect(inputPassword).toBe(true)
    })

    it('should contain two pairs of letters', () => {
        let inputPassword = checksOnPairsOfLetters(wrongPassword)
        expect(inputPassword).toBe(false)

        inputPassword = checksOnPairsOfLetters(rightPassword)
        expect(inputPassword).toBe(true)
    })
})
