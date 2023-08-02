// These are the rules that are used to validate the string fields of the form using hard coded regex.
// These options are used in a check box
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

// Extracts keys for the dropdown
export const StringValidationOptions = extractKeys(StringValidationRegex)
