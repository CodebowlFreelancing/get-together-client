import {h} from 'preact'
import {useState, useRef, useEffect} from 'preact/hooks'
import {css} from 'astroturf'
import {Page, TextInput, Textarea, Icon, Button} from '../ui'
import {remove} from '../common/arrayUtils'
import {displayDate} from '../common/dateUtils'
import AddDateRange from './addDateRange'

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

const CreateEventPage = () => {
  const [dates, setDates] = useState([])

  const removeDateOption = index => () => setDates(remove(index, dates))

  const createEvent = submitEvent => {
    submitEvent.preventDefault()
    console.log(submitEvent)
  }

  return (
    <Page title="Create event">
      <form onSubmit={createEvent}>
        <TextInput
          label="Title"
          name="title"
          onChange={event => event.target.setCustomValidity('')}
          onInvalid={event => event.target.setCustomValidity('Please fill title field.')}
          required
        />
        <TextInput label="Location" name="location" />
        <Textarea label="Description" name="description" />
        <fieldset>
          <legend>Date options</legend>
          <AddDateRange onAdd={daterange => setDates([daterange, ...dates])} required={dates.length === 0} />
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
    </Page>
  )
}

export default CreateEventPage
