import {h} from 'preact'
import {Page, Status} from '../ui'
import {postEvent} from './api'
import CreateEventForm from './createEventForm'
import CreateEventResult from './createEventResult'
import {delay} from '../common/eventUtils'
import {useAsyncOp} from '../common/useAsyncOp'

const CreateEventPage = () => {
  const [{result, busy, error}, {load, setResult, setError}] = useAsyncOp()

  const createEvent = async payload => {
    load()
    try {
      const response = await postEvent(payload)
      setResult(response.data)
    } catch (error) {
      setError(error)
      await delay(5000)
      setError(null)
    }
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
