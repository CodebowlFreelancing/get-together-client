import {h} from 'preact'
import Input from './input'
import Label from './label'

const DateInput = ({label, className, ...inputProps}) => (
  <Label text={label} required={inputProps.required}>
    <Input type="date" className={className} {...inputProps} />
  </Label>
)

export default DateInput
