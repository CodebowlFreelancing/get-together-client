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
    redirect: 'error',
  }).then(response => {
    if (response.ok) {
      return response.json()
    }

    // TODO 404 handling
    if (response.status === 404) {
      console.error('do redirect please')
    }

    throw new Error('Oops! Service seems to be unavailable. Please try again later.')
  })

const httpGET = _fetch('GET')
const httpPOST = _fetch('POST')
const httpPUT = _fetch('PUT')
const httpDELETE = _fetch('DELETE')

export {httpGET, httpPOST, httpPUT, httpDELETE}
