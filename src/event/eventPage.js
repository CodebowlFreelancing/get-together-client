import {h} from 'preact'
import {useEffect} from 'preact/hooks'
import {Page, Status} from '../ui'
import {useAsyncOp} from '../common/useAsyncOp'
import {getEvent} from './api'
import {getSegments} from '../common/urlUtils'

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

  return (
    <Page title="Event">
      <Status isBusy={busy} error={error}>
        Moi
      </Status>
    </Page>
  )
}

export default EventPage
