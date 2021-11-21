import {StatusActionTypes} from './status.types';

const INITIAL_STATE = {
  message: null,
  tp: null,
};

const statusReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StatusActionTypes.SETSTATUS: {
      return {
        ...state,
        message: action.payload.message,
        tp: action.payload.type,
      };
    }
    case StatusActionTypes.EMPTYSTATUS: {
      return {
        ...state,
        message: null,
        tp: null,
      };
    }

    default:
      return state;
  }
};
export default statusReducer;
