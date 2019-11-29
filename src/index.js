import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import * as firebase from 'firebase'
import registerServiceWorker from './registerServiceWorker';
const store = configureStore();
var config = {
  apiKey: "AIzaSyCTsQ99HjLa9BtHk7xSWSofwoWkRaZABhI",
  authDomain: "bidnow-9f2b3.firebaseapp.com",
  databaseURL: "https://bidnow-9f2b3.firebaseio.com",
  projectId: "bidnow-9f2b3",
  storageBucket: "bidnow-9f2b3.appspot.com",
  messagingSenderId: "1001875005960",
  appId: "1:1001875005960:web:98988469735365485de7bd",
  measurementId: "G-KK1HBT9S1H"
};
  firebase.initializeApp(config);
ReactDOM.render(<MuiThemeProvider >
                  <Provider store={store}>
                      <App />
                  </Provider>
              </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();