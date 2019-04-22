import {h} from 'preact'
import Input from './input'
import Label from './label'

const DateInput = ({label, className, ...inputProps}) => (
  <Label text={label}>
    <Input type="date" className={className} {...inputProps} />
  </Label>
)

export default DateInput
