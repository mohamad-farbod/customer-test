import * as actionTypes from "./actions";

const initialState = {
  notifications: 2,
  messages: 5,
  isAdmin: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
      return { ...state, messages: state.messages + 1 };
    case actionTypes.REDUCE_MESSAGE:
      return { ...state, messages: state.messages - 1 };
    case actionTypes.ADD_NOTIFICATION:
      return { ...state, notifications: state.notifications + 1 };
    case actionTypes.REDUCE_NOTIFICATION:
      return { ...state, messages: state.notifications - 1 };
    case actionTypes.IS_ADMIN:
      return { ...state, isAdmin: true };
    case actionTypes.NOT_ADMIN:
      return { ...state, isAdmin: false };
    default:
      return state;
  }
};

export default reducer;
