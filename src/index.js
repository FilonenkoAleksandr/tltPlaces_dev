import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./redux/store";

import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAawWSXlyn1xd1VYglMuE2cip_YtcqmItE",
  authDomain: "tlt-places.firebaseapp.com",
  databaseURL: "https://tlt-places.firebaseio.com",
  projectId: "tlt-places",
  storageBucket: "tlt-places.appspot.com",
  messagingSenderId: "870473676383",
  appId: "1:870473676383:web:ee023698f04c13e2a70dea",
  measurementId: "G-9YKKMG2BTE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))

serviceWorker.unregister();
