import * as types from './Types'

export const incrementCounter = (dispatch) => {
  dispatch({ type: types.INCREMENT_COUNTER })
}
export const decrementCounter = (dispatch) => {
  dispatch({ type: types.DECREMENT_COUNTER })
}
