import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routers/Router';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import './styles/css/index.css';
import 'three-dots';
import reduxStore from './store/reduxStore';
import { startSetSection } from './actions/sectionsActions';

const store = reduxStore();

let loading = (
  <div>
    <h2>Loading</h2>
    <div className="dot-elastic ms-5" style={ { marginLeft: "30px" } }></div>
    <h1>Tabber</h1>
  </div>
);

let App = (
  <React.StrictMode>
    <Provider store={ store }>
      <Router />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render( loading, document.getElementById( 'root' ) );

store.dispatch( startSetSection() ).then( () =>
{
  ReactDOM.render( App, document.getElementById( 'root' ) );
} );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();