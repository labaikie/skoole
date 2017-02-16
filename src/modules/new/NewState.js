import {Map, fromJS} from 'immutable';

// Initial state
const initialState = fromJS({
  greeting: 'hello',
  cards: [{value: 0}],
});

// Actions
const CHANGE = 'NewState/CHANGE';

// Action creators
export const change = () => ({
  type: CHANGE
})

// Reducer
export default function NewStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE:
      const greeting = state.get('greeting')
      const next = greeting == 'hello' ? 'bye' : 'hello'
      const value = state.getIn(['cards', 0, 'value']) + 1
      return state.setIn(['cards', 0, 'value'], value);
      // return state.update('greeting', value => next);

    default:
      return state;
  }
}
