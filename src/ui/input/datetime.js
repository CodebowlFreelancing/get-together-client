import preact from 'preact'
import DateInput from './date'
import TimeInput from './time'
import Inline from '../layout/inline'

const Datetime = ({id, ...props}) => (
  <Inline>
    <DateInput {...props} id={`${id}-date`} />
    <TimeInput {...props} id={`${id}-time`} />
  </Inline>
)

export default Datetime
