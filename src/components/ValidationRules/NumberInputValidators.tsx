// This component is used for number inputs validations 
import { Grid } from '@mui/material'
import { InputField } from '../fields/InputField'
import {  NumericValidator } from '../../types/validators.types'
import { FC } from 'react'

type Props = {
    validations: NumericValidator,
    setValidations: React.Dispatch<React.SetStateAction<NumericValidator>>
}

const NumberInputValidators: FC<Props> = (props) => {
    const { validations, setValidations } = props
    const handleChange = (option: string) => (value: string) => {
        setValidations({
            ...validations,
            [option]: value
        })
    }
    return (
        <>
            <Grid item xs={12}>
                <InputField type="number" onChange={handleChange('min')} label="Minimum Value" value={validations.min} />
            </Grid>
            <Grid item xs={12}>
                <InputField type="number" onChange={handleChange('max')} label="Maximum Value" value={validations.max} />
            </Grid>
        </>
    )
}

export default NumberInputValidators