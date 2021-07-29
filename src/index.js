import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routers/Router';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import './styles/css/index.css';
import reduxStore from './store/reduxStore';
import { addSection } from './actions/sectionsActions';

const store = reduxStore();

// store.subscribe( () =>
// {
//   console.log( store.getState() );
// } );

store.dispatch( addSection( { title: 'Tech' } ) );
store.dispatch( addSection( { title: 'Food' } ) );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById( 'root' )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
