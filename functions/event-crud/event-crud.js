/* eslint-disable */
exports.handler = async (event, context) => {
  const path = event.path.replace(/\.netlify\/functions\/[^\/]+/, '')
  const segments = path.split('/').filter(e => e)

  switch (event.httpMethod) {
    case 'GET':
      if (segments.length === 1) {
        event.id = segments[0]
        return require('./read').handler(event, context)
      } else {
        return {
          statusCode: 404,
          body: 'Requested path does not exists.',
        }
      }
    case 'POST':
      return require('./create').handler(event, context)
    case 'PUT':
      if (segments.length === 1) {
        event.id = segments[0]
        return require('./update').handler(event, context)
      } else {
        return {
          statusCode: 404,
          body: 'Requested path does not exists.',
        }
      }
  }
  return {
    statusCode: 500,
    body: 'Requested path does not exists.',
  }
}
