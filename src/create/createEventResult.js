import {h} from 'preact'
import {css} from 'astroturf'
import {Button} from '../ui'

const styles = css`
  .resultLinks {
    display: grid;
    grid-template-columns: 100px auto;
    grid-row-gap: 0.5em;
    align-items: center;
  }

  .resultActions {
    display: flex;
    margin-top: 2em;
    > button {
      margin-left: auto;
    }
  }
`

const CreateEventResult = ({title, eventId, adminId, createNewEvent}) => {
  const baseUrl = window.location.origin
  const eventPageUrl = `${baseUrl}/event/${eventId}`
  const adminPageUrl = `${baseUrl}/admin/${adminId}`

  return (
    <article>
      <section>
        <h2>Event "{title}" created</h2>
        <p>
          Below you can find two links: one to the event page and another to manage the event. Share the link to the
          event page to participants. Use the admin page to manage the event or change the details.{' '}
          <strong>Save the links!</strong>
        </p>
        <div className={styles.resultLinks}>
          <strong>Event page: </strong>
          <a href={eventPageUrl} target="_blank">
            {eventPageUrl}
          </a>
          <strong>Admin page: </strong>
          <a href={adminPageUrl} target="_blank">
            {adminPageUrl}
          </a>
        </div>
      </section>
      <section className={styles.resultActions}>
        <Button onClick={createNewEvent}>Create another event</Button>
      </section>
    </article>
  )
}

export default CreateEventResult
