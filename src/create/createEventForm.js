import {h} from 'preact'
import {useState} from 'preact/hooks'
import {css} from 'astroturf'
import {TextInput, Textarea, Icon, Button} from '../ui'
import {remove} from '../common/arrayUtils'
import {displayDate} from '../common/dateUtils'
import AddDateRange from './addDateRange'
import {clearCustomValidity, titleCustomValidity} from '../common/validity'

const styles = css`
  .submit {
    display: flex;
    justify-content: flex-end;
    margin-top: 1em;
  }

  .dateranges {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  }

  .daterange {
    display: flex;
    :not(:last-child) {
      flex-grow: 1;
      margin: 0 0.5em;
    }
  }

  .daterangeDisplay {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0.5em 0;
  }

  .daterangeClear {
    padding: 0.5em;
    border-radius: 25px;
    margin-left: auto;
  }
`

const fields = {
  title: 'title',
  location: 'location',
  description: 'description',
  dateoption: 'dateoption',
}

// TODO: Make date options validation more intuitive

// TODO Get id for dates
// Does not have to be unique, only unique in context of event soooo index?

// TODO Sort dates
// const sortEventsByDates = events => events.sort((a, b) => new Date(a.dates[0]).getTime() - new Date(b.dates[0]).getTime())
// ^ when to run this? not possible to sort on query? sort already on submit?

const CreateEventForm = ({onCreateEventFormSubmit}) => {
  const [dates, setDates] = useState([])
  const removeDateOption = index => () => setDates(remove(index, dates))

  const onSubmit = submitEvent => {
    submitEvent.preventDefault()

    const formData = new FormData(submitEvent.target)
    onCreateEventFormSubmit({
      title: formData.get(fields.title),
      location: formData.get(fields.location),
      description: formData.get(fields.description),
      dates:
        dates.length > 0
          ? dates
          : [[formData.get(`${fields.dateoption}-start`), formData.get(`${fields.dateoption}-end`)]],
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        label="Title"
        name={fields.title}
        onChange={clearCustomValidity}
        onInvalid={titleCustomValidity}
        required
      />
      <TextInput label="Location" name={fields.location} />
      <Textarea label="Description" name={fields.description} />
      <fieldset>
        <legend>Date options</legend>
        <AddDateRange
          name={fields.dateoption}
          onAdd={daterange => setDates([daterange, ...dates])}
          required={dates.length === 0}
        />
        {dates.length > 0 && <hr />}
        <div className={styles.dateranges}>
          {dates.map((date, index) => (
            <div key={index} className={styles.daterange}>
              <div className={styles.daterangeDisplay}>
                {displayDate(date[0])}
                {date[1] && ' - ' + displayDate(date[1])}
              </div>
              <Button className={styles.daterangeClear} type="button" onClick={removeDateOption(index)}>
                <Icon glyph="delete" />
              </Button>
            </div>
          ))}
        </div>
      </fieldset>
      <div className={styles.submit}>
        <Button type="submit">Create</Button>
      </div>
    </form>
  )
}

export default CreateEventForm
