import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {BrowserRouter} from 'react-router-dom'
import {store, persistor} from './Components/redux/store'
import App from "./Components/App/App";

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
               <App />
         </PersistGate>
    </Provider>
    </BrowserRouter>,
     document.getElementById("root"));
