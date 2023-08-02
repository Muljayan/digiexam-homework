import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { FormValidator } from '../types/validators.types'

export enum FieldType {
	Number = "number",
	String = "string",
	Date = "date",
	Boolean = "boolean",
}


export type Field = {
	key: string,
	type: FieldType,
	label: string,
	value: string,
	validations: FormValidator,
	errors: string[],
}

export interface FormState {
	fields: { [key: string]: Field }
}

const initialState: FormState = {
	fields: {},
}

export const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		addField: (state: FormState, action: PayloadAction<{ key: string, type: FieldType, label: string, validations: FormValidator }>) => {
			const { key, type, label, validations } = action.payload

			state.fields[key] = {
				key,
				type,
				label,
				value: '',
				validations,
				errors: []
			}
		},
		updateErrors: (state: FormState, action: PayloadAction<{ key: string, errors: string[] }>) => {
			const { key, errors } = action.payload
			state.fields[key] = {
				...state.fields[key],
				errors,
			}
		},
		setValue: (state, action: PayloadAction<{ key: string, value: string }>) => {
			const { key, value } = action.payload
			const field = state.fields[key];

			field.value = value;
		}
	},
})

export const { addField, setValue, updateErrors } = formSlice.actions
export const formReducer = formSlice.reducer