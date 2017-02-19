import { List, fromJS } from 'immutable'
import { get } from '../../utils/api'

/* Actions */
const ADD_FILTER = 'Explore/ADD_FILTER'
const REMOVE_FILTER = 'Explore/REMOVE_FILTER'
const STUDENTS_REQUEST = 'Explore/STUDENTS_REQUEST'
const STUDENTS_RESPONSE = 'Explore/STUDENTS_RESPONSE'

/* Action Creators */
export function setFilter(filter) {
  return (dispatch, getState) => {
    // check if the filter exists
    getState()
    // depending on existence, dispatch ADD or REMOVE
    dispatch({type: SET_FILTER, filter})
  }
}

export const request = () => ({type: STUDENTS_REQUEST})

export async function getStudents() {
  const endpoint = `/students?index=${index}`
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
    case REMOVE_FILTER:
    case GET_STUDENTS:
    // increment count & index,

  }

}
