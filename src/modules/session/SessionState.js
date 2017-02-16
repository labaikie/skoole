import {Map} from 'immutable';

export const RESET_STATE = 'SessionState/RESET';
export const INITIALIZE_STATE = 'SessionState/INITIALIZE';
export const EXIT_ONBOARDING = 'SessionState/EXIT_ONBORDING';

// Initial state
const initialState = Map({
  isReady: false,
  onboarding: true,
});

export const resetSessionStateFromSnapshot = (state) => ({
  type: RESET_STATE,
  payload: state
})

export const initializeSessionState = () => ({
  type: INITIALIZE_STATE
})

export const exitOnboarding = () => ({
  type: EXIT_ONBOARDING
})

// Reducer
export default function SessionStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INITIALIZE_STATE:
    case RESET_STATE:
      return state.set('isReady', true);
    case EXIT_ONBOARDING:
      return state.set('onboarding', false);
    default:
      return state;
  }
}
