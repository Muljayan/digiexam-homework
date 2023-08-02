import { StringValidator } from "../types/validators.types";

const validateCustomStrings = (value: string, validations: StringValidator) => {
    const errors: string[] = []
    validations.map((validation) => {
        const validationRule = new RegExp(validation)
        if (!validationRule.test(value)) errors.push(`regex validation failed for ${validation}`)
    })
    return errors;
}

export default validateCustomStrings;