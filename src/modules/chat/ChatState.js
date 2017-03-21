import { Map } from 'immutable'

const initialState = Map({
  isConnected: false,
  video: '',
})

export default function ChatStateReducer(state = initialState, action = {}) {
  switch (action.type) {

  default:
    return state
  }
}
