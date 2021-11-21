import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/ebiblo.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';
//-----------pwa register----------------------
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register(`${process.env.PUBLIC_URL}/sw.js`)
    .then((registration) => {
      // console.log('Service worker registration succeeded:' , registration);
    })
    .catch((err) => {
      console.log('Service worker registration failed:', err);
    });
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
