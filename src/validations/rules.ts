import extractKeys from "../utils/extractKeys"

export const StringValidationRegex: Record<string, {regex: RegExp, message:string}> = {
    Email: {
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address"
    },
    Date: {
        regex: /^\d{4}-\d{2}-\d{2}$/,
        message: "Please enter a valid date"
    },
    NoSpecialCharacters: {
        regex: /^[a-zA-Z0-9]*$/,
        message: 'Please enter a valid string with no special characters'
    },
    StartsWithCapital: {
        regex: /^[A-Z]/,
        message: 'Please enter a string that starts with a capital letter'
    },
    // ...add other validation regex here
}

export const StringValidationOptions = extractKeys(StringValidationRegex)
