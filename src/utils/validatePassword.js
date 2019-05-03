export function validatePassword(password) {
    const MASTERPASSWORD = 'pokemonmaster'
    const correctLength = checksOnLength(password)
    const correctCasing = checkOnLowerCase(password)
    const noIllegalCharacters = checkOnForbiddenLetters(password)
    const hasConsecutiveLetters = checksOnConsecutiveLetters(password)
    const hasTwoPairsOfLetters = checksOnPairsOfLetters(password)

    if (
        (correctLength &&
            correctCasing &&
            noIllegalCharacters &&
            hasConsecutiveLetters &&
            hasTwoPairsOfLetters) ||
        password === MASTERPASSWORD
    ) {
        return true
    } else {
        return false
    }
}

export function checksOnConsecutiveLetters(password) {
    password = password.replace(/[0-9]/g, '') // strip numbers from string
    let previousCharCode = null
    let currentCharCode = null
    let counterForConsecutiveLetters = 0
    let passwordContainsConsecutiveLetters = false

    for (let x = 0; x < password.length; x++) {
        currentCharCode = password.charCodeAt(x)
        if (currentCharCode - previousCharCode === 1) {
            counterForConsecutiveLetters++
        } else {
            counterForConsecutiveLetters = 0
        }
        if (counterForConsecutiveLetters === 2) {
            passwordContainsConsecutiveLetters = true
            break
        }
        previousCharCode = currentCharCode
    }

    return passwordContainsConsecutiveLetters
}

export function checksOnPairsOfLetters(password) {
    password = password.replace(/[0-9]/g, '') // strip numbers from string
    let previousCharCode = null
    let currentCharCode = null
    let counterForSameLetter = 0
    let passwordContainsTwoPairs = false

    for (let x = 0; x < password.length; x++) {
        currentCharCode = password.charCodeAt(x)
        if (currentCharCode === previousCharCode) {
            counterForSameLetter++
        }
        if (counterForSameLetter === 2) {
            passwordContainsTwoPairs = true
            break
        }
        previousCharCode = currentCharCode
    }
    return passwordContainsTwoPairs
}

export function checksOnLength(password) {
    if (password.length > 32) {
        return false
    } else {
        return true
    }
}

export function checkOnLowerCase(password) {
    const regex = /[^a-z]+/g
    const invalidMatches = password.match(regex)
    if (invalidMatches) {
        return false
    } else {
        return true
    }
}

export function checkOnForbiddenLetters(password) {
    if (password.includes('i')) {
        return false
    } else {
        return true
    }
}
