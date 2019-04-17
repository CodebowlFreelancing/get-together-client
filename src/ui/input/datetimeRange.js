import {h} from 'preact'
import Label from './label'
import Datetime from './datetime'
import {css} from 'astroturf'

const styles = css`
  .inputDatetimeRange {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`

const DatetimeRange = ({id, ...props}) => (
  <div className={styles.inputDatetimeRange}>
    <Label text="Start">
      <Datetime />
    </Label>
    <Label text="End">
      <Datetime />
    </Label>
  </div>
)

export default DatetimeRange
