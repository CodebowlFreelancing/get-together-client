import {h} from 'preact'
import Label from './label'
import Input from './input'

const TextInput = ({label, ...inputProps}) => (
  <Label text={label}>
    <Input type="text" {...inputProps} />
  </Label>
)

export default TextInput
