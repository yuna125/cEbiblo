/*
 *  Status Actions
 */
import {StatusActionTypes} from './status.types';

export const setStatus = (msg, tp) => (dispatch) => {
  dispatch({
    type: StatusActionTypes.SETSTATUS,
    payload: {message: msg, type: tp},
  });
};

export const emptyStatus = (status) => (dispatch) => {
  dispatch({
    type: StatusActionTypes.EMPTYSTATUS,
  });
};
