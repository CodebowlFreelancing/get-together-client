import {httpGET} from '../common/http'

export const getEvent = eventId => httpGET(`/.netlify/functions/event-crud/event-crud/${eventId}`)
