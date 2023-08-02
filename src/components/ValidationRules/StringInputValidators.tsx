// This component is used for string inputs with predefined validations (checkbox based validations)
import { FormGroup } from "@mui/material";
import { FC } from "react"
import { CheckboxField } from "../fields/CheckboxField";
import { StringValidator } from "../../types/validators.types";
import { StringValidationOptions } from "../../validations/rules";

type Props = {
	validations: StringValidator,
	setValidations: React.Dispatch<React.SetStateAction<StringValidator>>
}

const StringInputValidators: FC<Props> = ({ validations, setValidations }) => {

	const onChange = (option: string) => () => {
		const newValidations = [...validations]
		if (newValidations.find((validation) => validation === option)) {
			setValidations(newValidations.filter((validation) => validation !== option))
		} else {
			setValidations([...newValidations, option])
		}
	}

	return (
		<FormGroup>
			{
				StringValidationOptions.map((option) => <CheckboxField value={validations.find((validation) => validation === option) ? '1' : '0'} key={option} label={option} onChange={onChange(option)} />)
			}
		</FormGroup>
	)
}

export default StringInputValidators;