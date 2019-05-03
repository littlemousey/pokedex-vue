export function validatePassword(password) {
    const MASTERPASSWORD = 'pokemonmaster'
    const correctLength = checksOnLength(password)
    const correctCasing = checkOnLowerCase(password)

    if ((correctLength && correctCasing) || password === MASTERPASSWORD) {
        return true
    } else {
        return false
    }
}

export function checksOnLength(password) {
    if (password.length > 32) {
        return false
    } else {
        return true
    }
}

export function checkOnLowerCase(password) {
    const regex = /[A-Z]/g
    const matchCapitalLetters = password.match(regex)
    if (matchCapitalLetters) {
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
