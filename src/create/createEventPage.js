import {h} from 'preact'
import {useState} from 'preact/hooks'
import {css} from 'astroturf'
import {Page, TextInput, Textarea, Icon, Button} from '../ui'
import {remove} from '../common/arrayUtils'
import AddDateRange from './addDateRange'
import {displayDate} from '../common/dateUtils'

const styles = css`
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
  const [dates, setDates] = useState([
    [new Date(), new Date()],
    [new Date(), new Date()],
    [new Date(), new Date()],
    [new Date(), new Date()],
    [new Date(), new Date()],
  ])

  const removeDateOption = index => () => setDates(remove(index, dates))

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
          <div className={styles.dateranges}>
            {dates.map((date, index) => (
              <div key={index} className={styles.daterange}>
                <div className={styles.daterangeDisplay}>
                  {displayDate(date[0])}
                  {date[1] ? ' - ' + displayDate(date[1]) : ''}
                </div>
                <Button className={styles.daterangeClear} type="button" onClick={removeDateOption(index)}>
                  <Icon glyph="delete" />
                </Button>
              </div>
            ))}
          </div>
        </fieldset>
        <button type="submit" style={{marginTop: '1em'}}>
          Create
        </button>
      </form>
    </Page>
  )
}

export default CreateEventPage
