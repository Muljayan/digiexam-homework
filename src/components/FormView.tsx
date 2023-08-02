import { RootState } from "../store/config.ts";
import { useDispatch, useSelector } from "react-redux";
import { Field, FieldType, setValue, updateErrors } from "../store/form.ts";
import { InputField } from "./fields/InputField.tsx";
import { CheckboxField } from "./fields/CheckboxField.tsx";
import { DateField } from "./fields/DateField.tsx";
import { Grid, Typography } from "@mui/material";
import { useCallback } from "react";
import validateStrings from "../validations/validateStrings.ts";
import { StringValidator, NumericValidator } from "../types/validators.types.ts";
import validateNumber from "../validations/validateNumber.ts";
import { toast } from "react-toastify";

const fieldComponents = {
	[FieldType.Number]: InputField,
	[FieldType.String]: InputField,
	[FieldType.Boolean]: CheckboxField,
	[FieldType.Date]: DateField,
};

export const FormView = () => {
	const { fields } = useSelector((state: RootState) => state.form)
	const dispatch = useDispatch()

	const onChange = useCallback((key: string) => (value: string) => {
		dispatch(setValue({ key, value }));
	}, [dispatch])

	const validate = useCallback((key: string, field: Field) => () => {
		const { type, value, validations } = field
		let errors: string[] = []
		switch (type) {
			case FieldType.Number:
				errors = validateNumber(value, validations as NumericValidator)
				break;
			case FieldType.String: {
				errors = validateStrings(value, validations as StringValidator)
				break;
			}
		}
		errors.map((error) => toast(error))
		dispatch(updateErrors({ key, errors }))
	}, [])


	const renderFields = () => {
		return Object.entries(fields).map(([key, field]) => {
			const FieldComponent = fieldComponents[field.type];
			return (
				<Grid item xs={12} key={key}>
					<FieldComponent
						type={field.type === FieldType.Number ? "number" : undefined}
						label={field.label}
						onChange={onChange(key)}
						value={field.value}
						onBlur={validate(key, field)}
					/>
				</Grid>
			);
		});
	};

	return (
		<Grid container spacing={2} sx={{ width: 300, margin: "auto" }}>
			<Grid item xs={12}>
				<Typography variant="h4" gutterBottom>
					Form Preview
				</Typography>
			</Grid>
			{renderFields()}
		</Grid>
	);
}