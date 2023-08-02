import { NumericValidator } from "../types/validators.types";

const validateNumber = (value: string, validations: NumericValidator): string[] => {
    const errors: string[] = [];

    const numericValue = Number(value);

    if (!isNaN(numericValue)) {
        if (validations.max !== '' && numericValue > Number(validations.max)) {
            errors.push(`Value cannot be greater than ${validations.max}`);
        }

        if (validations.min !== '' && numericValue < Number(validations.min)) {
            errors.push(`Value cannot be less than ${validations.min}`);
        }
    } else {
        errors.push("Invalid number format");
    }

    return errors;
};

export default validateNumber;
