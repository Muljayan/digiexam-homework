import { Dropdown } from "./fields/Dropdown.tsx";
import { useCallback, useState } from "react";
import { addField, FieldType, } from "../store/form.ts";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { InputField } from "./fields/InputField.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/config.ts";
import ValidationRules from "./validationRules";
import { FormValidator, NumericValidator } from "../types/validators.types.ts";
import { toast } from "react-toastify";

export const FormBuilder = () => {
	const [currentType, setCurrentType] = useState("");
	const [currentKey, setCurrentKey] = useState("")
	const [currentLabel, setCurrentLabel] = useState("")
	const [validations, setValidations] = useState<FormValidator>([])
	const dispatch = useDispatch();
	const { fields } = useSelector((state: RootState) => state.form)

	const handleAddingField = () => {
		if (fields[currentKey] !== undefined) {
			toast("Key already exists")
			return
		}

		// Validation to make sure the settings are correct
		if (currentType === FieldType.Number) {
			const numericValidations = validations as NumericValidator
			if (numericValidations.min !== '' && numericValidations.max !== '' && parseInt(numericValidations.min) > parseInt(numericValidations.max)) {
				toast("Min value cannot be greater than max value")
				return
			}
		}


		if (currentType && currentKey && currentLabel) {
			dispatch(addField({ key: currentKey, type: currentType as FieldType, label: currentLabel, validations }))
		}
	}

	// Sets initial state based on type, memoized to prevent unnecessary rerenders
	const updateType = useCallback((type: string) => {
		setCurrentType(type)
		switch (type) {
			case FieldType.String:
				setValidations([])
				break;
			case FieldType.Number:
				setValidations({
					min: '',
					max: '',
				})
				break;
			default:
		}
	}, [])

	return (
		<Grid container spacing={2} sx={{ width: 300, margin: "auto" }}>
			<Grid item xs={12}>
				<Typography variant="h4" gutterBottom>
					Form Builder
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Dropdown label="Choose a field type"
					value={currentType}
					onChange={updateType}
					options={{
						"Number": FieldType.Number,
						"String": FieldType.String,
						"Date": FieldType.Date,
						"Boolean": FieldType.Boolean,
					}} />
			</Grid>
			<Grid item xs={12}>
				<InputField onChange={(value) => setCurrentKey(value)} label="Key" value={currentKey} />
			</Grid>
			<Grid item xs={12}>
				<InputField onChange={(value) => setCurrentLabel(value)} label="Label" value={currentLabel} />
			</Grid>

			<Grid item xs={12}>
				<Divider />
				<Typography variant="h6" fontWeight={600} gutterBottom >
					Validations
				</Typography>

				<ValidationRules
					currentFieldType={currentType as FieldType}
					validations={validations}
					setValidations={setValidations}
				/>

			</Grid>

			<Grid item xs={12}>

				<Button variant="contained" color="primary" onClick={handleAddingField}>
					Add Field
				</Button>
			</Grid>
		</Grid>
	)
}