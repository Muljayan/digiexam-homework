export type NumericValidator = {
    min: string;
    max: string;
}

export type StringValidator = string[]

export type FormValidator = NumericValidator | StringValidator