import { List, fromJS } from 'immutable'
import { loop, Effects } from 'redux-loop'
import { get } from '../../utils/api'

/* Actions */
const ADD_FILTER = 'Explore/ADD_FILTER'
const REMOVE_FILTER = 'Explore/REMOVE_FILTER'
const GET_STUDENTS = 'Explore/GET_STUDENTS'
const STUDENTS_RESPONSE = 'Explore/STUDENTS_RESPONSE'

/* Action Creators */
export function setFilter(filter) {
  return (dispatch, getState) => {
    // check if the filter exists
    const state = getState()
    console.log('state', state)
    // TODO: depending on existence, dispatch ADD or REMOVE
    dispatch({type: ADD_FILTER, filter})
  }
}

export const request = () => ({type: GET_STUDENTS})

export async function getStudents() {
  // const endpoint = `/students?index=${index}`
  // TODO: switch to endpoint later
  return {
    type: STUDENTS_RESPONSE,
    payload: await get('/gides')
  }
}

/*  Initial State */
const initialState = fromJS({
  filters: List(),
  students: {
    count: 0,
    list: List(),
    index: 0,
  }
})

/*  Reducer */
export default function ExploreReducer(state = initialState, action) {

  switch (action.type) {
    case ADD_FILTER:
      return

    case REMOVE_FILTER:
      return

    case GET_STUDENTS:
      return loop(
        // increment index for subsequent calls
        state.updateIn(['students', 'index'], index => index + 1),
        // dispatch getStudents
        Effects.promise(getStudents)
      )

    case STUDENTS_RESPONSE:
      const data = action.payload.data.gides
      return state
        .updateIn(['students', 'count'], count => count + data.length)
        .mergeDeepIn(['students', 'list'], data)

    default:
      return state
  }
}
