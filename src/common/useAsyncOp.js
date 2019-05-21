import {useReducer} from 'preact/hooks'

const initialState = {
  busy: false,
  error: null,
  result: null,
}

const SET_RESULT = Symbol('setResult')
const SET_ERROR = Symbol('setError')
const LOAD = Symbol('load')

const reducer = (state, action) => {
  switch (action.type) {
    case SET_RESULT:
      return {...state, result: action.payload, busy: false}
    case SET_ERROR:
      return {...state, error: action.payload, busy: false}
    case LOAD:
      return {...state, busy: true, error: null, result: null}
    default:
      return state
  }
}

export const useAsyncOp = (initial = initialState) => {
  const [state, dispatch] = useReducer(reducer, initial)
  return [
    state,
    {
      setResult: result => dispatch({type: SET_RESULT, payload: result}),
      setError: error => dispatch({type: SET_ERROR, payload: error}),
      load: () => dispatch({type: LOAD}),
    },
  ]
}
