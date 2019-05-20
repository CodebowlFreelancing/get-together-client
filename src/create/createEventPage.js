import {h} from 'preact'
import {useState} from 'preact/hooks'
import {css} from 'astroturf'
import {Page, Status} from '../ui'
import {postEvent} from './api'
import CreateEventForm from './createEventForm'
import CreateEventResult from './createEventResult'
import {delay} from '../common/eventUtils'

const CreateEventPage = () => {
  const [result, setResult] = useState(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(null)

  const createEvent = async payload => {
    setBusy(true)
    try {
      const response = await postEvent(payload)
      setResult(response.data)
    } catch (error) {
      setError(error)
      await delay(5000)
      setError(null)
    }
    setBusy(false)
  }

  const createNewEvent = () => setResult(null)

  return (
    <Page title="Create event">
      <Status isBusy={busy} error={error}>
        {result ? (
          <CreateEventResult {...result} createNewEvent={createNewEvent} />
        ) : (
          <CreateEventForm onCreateEventFormSubmit={createEvent} />
        )}
      </Status>
    </Page>
  )
}

export default CreateEventPage
