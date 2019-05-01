import {httpPOST} from '../common/http'

export const postEvent = payload =>
  httpPOST('/.netlify/functions/create-event/create-event', {body: JSON.stringify(payload)})
