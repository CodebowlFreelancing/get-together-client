import {httpGET, httpPOST} from '../common/http'

export const getEvent = eventId => httpGET(`/.netlify/functions/event/event/${eventId}`)

export const postParticipate = payload =>
  httpPOST('/.netlify/functions/participate/participate', {body: JSON.stringify(payload)})
