import {h} from 'preact'
import Input from './input'
import Label from './label'

const DateInput = ({label, ...inputProps}) => (
  <Label text={label}>
    <Input type="date" {...inputProps} />
  </Label>
)

export default DateInput
