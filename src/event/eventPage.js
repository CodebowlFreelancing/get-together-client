import {h} from 'preact'
import {useEffect} from 'preact/hooks'
import {Page, Status} from '../ui'
import {useAsyncOp} from '../common/useAsyncOp'
import {getEvent} from './api'
import {getSegments} from '../common/urlUtils'
import EventParticipateForm from './eventParticipateForm'

const EventPage = () => {
  const [{result, busy, error}, {load, setResult, setError}] = useAsyncOp()

  useEffect(() => {
    const fetchEvent = async () => {
      load()
      try {
        const eventId = getSegments()[1]
        const response = await getEvent(eventId)
        setResult(response.data)
      } catch (error) {
        setError(error)
      }
    }

    fetchEvent()
  }, [])

  const {title, location, description, dates} = result || {}
  return (
    <Page title={title || 'Event'}>
      <Status isBusy={busy} error={error}>
        <span>{location}</span>
        <pre>{description}</pre>
        <EventParticipateForm dates={dates} />
      </Status>
    </Page>
  )
}

export default EventPage
