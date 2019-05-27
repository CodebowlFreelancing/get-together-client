import {h} from 'preact'
import {css} from 'astroturf'
import {TextInput, Button} from '../ui'
import {displayDateString} from '../common/dateUtils'
import CheckboxInput from '../ui/input/checkbox'

const styles = css`
  .submit {
    display: flex;
    justify-content: flex-end;
    margin-top: 1em;
  }
`

const fields = {
  name: 'name',
  dateOption: 'dateOption',
}

const EventParticipateForm = ({dates, onParticipate}) => {
  const onSubmit = submitEvent => {
    submitEvent.preventDefault()
    const formData = new FormData(submitEvent.target)
    console.log(submitEvent.target)
    console.log(formData.get(fields.name))
    console.log(formData.getAll(fields.dateOption).map(date => date.split(',')))
    // onParticipate({
    //   name: formData.get('name'),
    // })
  }

  return (
    <form onSubmit={onSubmit}>
      <TextInput label="Name" name={fields.name} required />
      <fieldset>
        <legend>I can participate on...</legend>
        {dates &&
          dates.map((date, index) => (
            <CheckboxInput
              key={index}
              label={`${displayDateString(date[0])}${date[1] ? ' - ' + displayDateString(date[1]) : ''}`}
              name={fields.dateOption}
              value={date}
            />
          ))}
      </fieldset>
      <div className={styles.submit}>
        <Button type="submit">Participate</Button>
      </div>
    </form>
  )
}

export default EventParticipateForm
