import { FC } from "react"
import { FieldType } from "../../store/form"
import { FormValidator, NumericValidator, StringValidator } from "../../types/validators.types"
// import StringInputValidators from "./StringInputValidators"
import NumberInputValidators from "./NumberInputValidators"
import { Typography } from "@mui/material"
import CustomStringInputValidators from "./CustomStringInputValidator"

type Props = {
  currentFieldType: FieldType,
  validations: FormValidator,
  setValidations: React.Dispatch<React.SetStateAction<FormValidator>>
}

const ValidationRules: FC<Props> = ({ currentFieldType, validations, setValidations }) => {

  switch (currentFieldType) {
    case FieldType.String:
      return (
        // <StringInputValidators
        //   validations={validations as StringValidator}
        //   setValidations={setValidations as React.Dispatch<React.SetStateAction<StringValidator>>}
        // />
        <CustomStringInputValidators
          validations={validations as StringValidator}
          setValidations={setValidations as React.Dispatch<React.SetStateAction<StringValidator>>}
        />
      )
    case FieldType.Number:
      return (
        <NumberInputValidators
          validations={validations as NumericValidator}
          setValidations={setValidations as React.Dispatch<React.SetStateAction<NumericValidator>>}
        />
      )
    default:
      return (
        <Typography variant="body1" gutterBottom>
          This field has no validation options
        </Typography>
      )
  }
}

export default ValidationRules

