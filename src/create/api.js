import {httpPOST} from '../common/http'

export const postEvent = payload =>
  httpPOST('/.netlify/functions/event-crud/event-crud', {body: JSON.stringify(payload)})
