const _fetch = method => (url, options = {headers: {}}) =>
  fetch(url, {
    ...options,
    method,
    credentials: 'same-origin',
    mode: 'cors', // for dev until parcel gets proxy support
    headers: new Headers({
      ...options.headers,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
  }).then(response => {
    if (response.ok) {
      return response.json()
    }

    throw new Error('Server unavailable')
  })

const httpGET = _fetch('GET')
const httpPOST = _fetch('POST')
const httpPUT = _fetch('PUT')
const httpDELETE = _fetch('DELETE')

export {httpGET, httpPOST, httpPUT, httpDELETE}
