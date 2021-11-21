/*
 *  Subcscription Actions
 */
//import {earlyaccess_subscription} from '../../api/queries';
import {setStatus} from '../status/status.actions';
import {network} from '../../services/network';

export const contactusSubmit = (data) => async (dispatch) => {
  dispatch(setStatus('loading'));
  let URL = 'feedback/contact-us';
  const {email, name, mobile, message} = data;
  const body = {
    email,
    name,
    message,
    phoneNumber: mobile,
  };
  network
    .post(URL, body)
    .then(() => {
      dispatch(setStatus('Your message is delivered. Thank you!', 'contact'));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setStatus('Failure', 'contact'));
    });
};

export const earlyaccessSubmit = (data) => async (dispatch) => {
  dispatch(setStatus('loading'));
  let URL = 'feedback/early-access';
  const {email, book1, book2, book3, join_facebook} = data;
  const body = {
    email,
    books: [book1, book2, book3].filter((b) => !!b),
    joinFacebook: join_facebook,
  };
  network
    .post(URL, body)
    .then(() => {
      dispatch(setStatus('Thank you for subscribing!', 'earlyaccess'));
    })
    .catch((err) => {
      dispatch(setStatus('Failure', 'earlyaccess'));
    });
};
