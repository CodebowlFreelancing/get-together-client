import {h} from 'preact'
import {useState} from 'preact/hooks'
import {css} from 'astroturf'
import Date from './date'

const styles = css`
  .dateRange {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 0 2em;
  }
`

const DateRange = ({onChange}) => {
  const [startValue, setStartValue] = useState(null)
  const [endValue, setEndValue] = useState(null)

  const onStartChange = event => {
    const newStartValue = event.target.value
    setStartValue(newStartValue)
    onChange([newStartValue, endValue])
  }

  const onEndChange = event => {
    const newEndValue = event.target.value
    setEndValue(newEndValue)
    onChange([startValue, newEndValue])
  }

  return (
    <div className={styles.dateRange}>
      <Date label="Start" onChange={onStartChange} />
      <Date label="End" onChange={onEndChange} disabled={!startValue} />
    </div>
  )
}

export default DateRange
