import {httpPOST} from '../common/http'

export const postEvent = payload => httpPOST('/.netlify/functions/event/event', {body: JSON.stringify(payload)})
