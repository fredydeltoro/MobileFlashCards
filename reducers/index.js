import * as actions from '../actions';

function decks(state={}, action) {
  switch (action.type) {
    case actions.RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
      break;
    default:
      return state;
  }
}


export default decks;
