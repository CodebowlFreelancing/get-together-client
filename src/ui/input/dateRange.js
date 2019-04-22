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

const DateRange = ({id, initialValue = [null, null], onChange, disabled}) => {
  const [startValue, setStartValue] = useState(initialValue[0])
  const [endValue, setEndValue] = useState(initialValue[1])

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
    <fieldset className={styles.dateRange}>
      <legend>Date range</legend>
      <Date id={`${id}-start`} label="Start" onChange={onStartChange} disabled={disabled} />
      <Date id={`${id}-end`} label="End" onChange={onEndChange} disabled={disabled || !startValue} />
    </fieldset>
  )
}

export default DateRange
