import { ADD_POSTS, DELETE } from '../actions'
const initialState = {
  start: 0
}
export default function posts(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_ASYNC':
      return { ...state, start: state.start + 1 }
    case DELETE:
      return { ...state, start: state.start - 1 }
    default:
      return state
  }
}