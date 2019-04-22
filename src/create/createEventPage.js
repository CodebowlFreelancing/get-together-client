import {h} from 'preact'
import {useState} from 'preact/hooks'
import {css} from 'astroturf'
import {Page, TextInput, Textarea, Icon, Button} from '../ui'
import {remove, replace} from '../common/arrayUtils'
import AddDateRange from './addDateRange'

const styles = css`
  .dates {
    display: flex;
    text-align: right;
    :not(:last-child) {
      flex-grow: 1;
      margin: 0 0.5em;
    }
  }

  .date {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  .dateClear {
    padding: 0.5em;
    border-radius: 25px;
    margin-left: auto;
  }
`

const CreateEventPage = () => {
  const [dates, setDates] = useState([
    ['string', 'string'],
    ['string', 'string'],
    ['string', 'string'],
    ['string', 'string'],
    ['string', 'string'],
  ])

  const foo = index => () => setDates(remove(index, dates))

  return (
    <Page title="Create event">
      <form>
        <TextInput label="Title" id="title" />
        <TextInput label="Location" id="location" />
        <Textarea label="Description" id="description" />
        <fieldset>
          <legend>Date options</legend>
          <AddDateRange onAdd={daterange => setDates([daterange, ...dates])} />
          <hr />
          {dates.map((date, index) => (
            <div key={index} className={styles.dates}>
              <div className={styles.date}>
                <span>{date[0]}</span>
                <span>{date[1]}</span>
              </div>
              <Button className={styles.dateClear} type="button" onClick={foo(index)}>
                <Icon glyph="delete" />
              </Button>
            </div>
          ))}
        </fieldset>
        <button type="submit" style={{marginTop: '1em'}}>
          Create
        </button>
      </form>
    </Page>
  )
}

/*

dateranges

*/

export default CreateEventPage
