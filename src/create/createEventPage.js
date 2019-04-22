import {h} from 'preact'
import {useState} from 'preact/hooks'
import {Page, TextInput, Textarea, DateRange} from '../ui'
import {remove, replace} from '../common/arrayUtils'

/*
Date option removal problem:
- unintuitive from the "clear" syntax
- indexes will get messed up as there are no real ids but indexes instead
  => however, atm relies on indexes getting messed up when adding new date option after writing something.
     this might be possible to fix by taking control of values if proper keys are introduced
- editing dates manually will invalidate value (remove it) which causes the daterange to also behave funcy
*/

const CreateEventPage = () => {
  const [dates, setDates] = useState([[null, null]])

  const updateDate = index => date => {
    // if (dates[index][0] && !date[0]) {
    //   setDates(remove(index, dates))
    // } else

    if (dates[index][0]) {
      setDates(replace(index, date, dates))
    } else {
      setDates([date, ...dates])
    }
  }

  console.log(dates)

  return (
    <Page title="Create event">
      <form>
        <TextInput label="Title" id="title" />
        <TextInput label="Location" id="location" />
        <Textarea label="Description" id="description" />
        {dates.map((date, index) => (
          <DateRange key={index} id={`daterange-${index}`} onChange={updateDate(index)} />
        ))}
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
