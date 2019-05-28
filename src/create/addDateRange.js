import {h} from 'preact'
import {useState} from 'preact/hooks'
import {css} from 'astroturf'
import {Date, Button, Icon} from '../ui'

const styles = css`
  .dateRange {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    > :not(:last-child) {
      flex-grow: 1;
      margin: 0 0.5em;
    }
  }

  .addDateRangeButton {
    padding: 0.5em;
    border-radius: 25px;
    margin-left: auto;
  }
`

const AddDateRange = ({nameStart, nameEnd, onAdd}) => {
  const [keyToResetDateRange, resetDateRange] = useState(true)
  const [startValue, setStartValue] = useState(null)
  const [endValue, setEndValue] = useState(null)

  const addDate = () => {
    onAdd([startValue, endValue])
    setStartValue(null)
    setEndValue(null)
    resetDateRange(!keyToResetDateRange)
  }

  const onStartChange = event => setStartValue(event.target.valueAsDate)

  const onEndChange = event => setEndValue(event.target.valueAsDate)

  return (
    <div className={styles.dateRange}>
      <Date key={keyToResetDateRange} name={nameStart} label="Start" onChange={onStartChange} />
      <Date key={keyToResetDateRange} name={nameEnd} label="End" onChange={onEndChange} disabled={!startValue} />
      <Button className={styles.addDateRangeButton} type="button" onClick={addDate} disabled={!startValue}>
        <Icon glyph="add" />
      </Button>
    </div>
  )
}

export default AddDateRange
