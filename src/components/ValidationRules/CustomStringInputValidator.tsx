// This component is used for string inputs with custom validations (regex input based validations)
import { Button, Grid } from "@mui/material";
import { FC, useState } from "react"
import { StringValidator } from "../../types/validators.types";
import { InputField } from "../fields/InputField";
import { toast } from "react-toastify";

type Props = {
	validations: StringValidator,
	setValidations: React.Dispatch<React.SetStateAction<StringValidator>>
}

const CustomStringInputValidators: FC<Props> = ({ validations, setValidations }) => {
	const [regexText, setRegexText] = useState('')

	const addRegex = () => {
		if (validations.find((validation) => validation === regexText)) {
			toast("Regex already exists")
			return
		}
		setValidations([...validations, regexText])
	}

	return (
		<>
			<Grid item xs={12}>
				<ul>
				{
					validations.map((validation) => <li key={validation}>{validation}</li>)
				}
				</ul>
				</Grid>
			<Grid item xs={12}>
				<InputField onChange={setRegexText} label="Enter Regex without / /" value={regexText} />
			</Grid>
			<Grid item xs={12}>

				<Button variant="contained" color="primary" onClick={addRegex}>
					Add Regex
				</Button>
			</Grid>
		</>
	)
}

export default CustomStringInputValidators;