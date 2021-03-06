/* Import faunaDB sdk */
const faunadb = require('faunadb')

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
})

exports.handler = async (event, context) => {
  const id = event.eventId
  console.log(`Function 'read' invoked. Read id: ${id}`)
  return client
    .query(q.Get(q.Match(q.Index('event_eventId'), id)))
    .then(response => {
      console.log('success', response)
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      }
    })
    .catch(error => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      }
    })
}
