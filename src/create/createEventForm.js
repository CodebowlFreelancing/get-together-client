import {h} from 'preact'
import {useState} from 'preact/hooks'
import {css} from 'astroturf'
import {TextInput, Textarea, Icon, Button, Legend} from '../ui'
import {remove} from '../common/arrayUtils'
import {displayDate} from '../common/dateUtils'
import AddDateRange from './addDateRange'
import {clearCustomValidity, titleCustomValidity, daterangeCustomValidity} from '../common/validity'

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
  daterangeStart: 'daterange-start',
  daterangeEnd: 'daterange-end',
}

const dateObjSort = (a, b) => (a.start === b.start ? 0 : a.start < b.start ? -1 : 1)

const dateStrPairToDateObj = ([start, end], id) => ({id, start, end})

// TODO Query participation https://docs.fauna.com/fauna/current/reference/indexconfig & https://docs.fauna.com/fauna/current/howto/fql_for_sql_users#join
// Probably good enough to just query both event and participation with both ids in segments and combine in code

// TODO Sort with faunadb values https://fauna.com/blog/index-queries-in-faunadb & https://docs.fauna.com/fauna/current/reference/indexconfig#ordering

const CreateEventForm = ({onCreateEventFormSubmit}) => {
  const [dates, setDates] = useState([])

  const removeDateOption = index => () => setDates(remove(index, dates))

  const onSubmit = submitEvent => {
    submitEvent.preventDefault()

    if (dates.length === 0) {
      daterangeCustomValidity(submitEvent.target[fields.daterangeStart])
      return
    }

    const formData = new FormData(submitEvent.target)

    onCreateEventFormSubmit({
      title: formData.get(fields.title),
      location: formData.get(fields.location),
      description: formData.get(fields.description),
      dates: dates.map(dateStrPairToDateObj).sort(dateObjSort),
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
        <Legend required>Date options</Legend>
        <AddDateRange
          nameStart={fields.daterangeStart}
          nameEnd={fields.daterangeEnd}
          onAdd={daterange => setDates([daterange, ...dates])}
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
