import { fromJS, List } from 'immutable'
// TODO: figure out where to hold API fetching info
export const NEXT_CARD = 'ColorState/NEXT_CARD'
export const FLIP_CARD = 'ColorState/FLIP_CARD'

// Initial state
const initialState = fromJS({
  current: 0,
  back: true,
  cards: List([
    {url: 'https://images.luisaviaroma.com/Big65I/W88/024_0ffa865b-2df1-43b8-9608-5cefa1e1455f.JPG'},
    {url: 'https://images.luisaviaroma.com/Big64I/VHG/001_66f55d97-0a09-4bb5-b480-f0f2c53fad86.JPG'},
    {url: 'https://images.luisaviaroma.com/Big64I/VY8/004_c315ab35-921e-40d6-8635-14dc56536855.JPG'},
    {url: 'https://images.luisaviaroma.com/Big63I/KDU/003_4c4d1f28-3990-4a19-9d58-f70a9b3c4d9b.JPG'},
    {url: 'https://images.luisaviaroma.com/Big64I/VHG/003_8e653a22-5df0-4212-8c03-12e8358cd883.JPG'}
  ]),
})

export const flipCard = () => ({
  type: FLIP_CARD
})

export const nextCard = () => ({
  type: NEXT_CARD
})

// Reducer
export default function ColorStateReducer(state = initialState, action = {}) {
  const nextFace = !(state.get('back'))
  const next = state.get('current') + 1

  switch (action.type) {
    case FLIP_CARD:
      return state.set('back', nextFace)
    case NEXT_CARD:
      state.set('back', false)
      return state.set('current', next)
    default:
      return state
  }

}
