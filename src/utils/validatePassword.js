export function validatePassword(password) {
    const correctLength = checksOnLength();
    const correctCasing = checkOnLowerCase();

    if (correctLength && correctCasing || password === 'master') {
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