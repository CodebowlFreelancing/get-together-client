import {httpPOST} from '../common/http'

export const postEvent = payload => httpPOST('http://localhost:3000/events', {body: JSON.stringify(payload)})
