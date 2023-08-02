import { StringValidator } from "../types/validators.types";
import { StringValidationRegex } from "./rules";

const validateStrings = (value: string, validations: StringValidator) => {
    const errors: string[] = []
    validations.map((validation) => {
        const validationRule = StringValidationRegex[validation]
        if (!validationRule.regex.test(value)) errors.push(validationRule.message)
    })
    return errors;
}

export default validateStrings;