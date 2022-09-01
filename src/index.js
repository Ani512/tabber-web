import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/Router';
import { Provider } from 'react-redux';
import 'three-dots';
import { firebase } from './firebase/firebase';
import './styles/css/index.css';
import reduxStore from './store/reduxStore';
import { startSetSection } from './actions/sectionsActions';
import { history } from './routers/Router';
import { login, logout } from './actions/authActions';

const store = reduxStore();

let loading = (
  <div style={{ marginTop: '20%', marginLeft: '35%' }}>
    <h2>Loading</h2>
    <div className="dot-elastic ms-5" style={ { marginLeft: "30px" } }></div>
    <h1>Tabber</h1>
  </div>
);

let App = (
  <React.StrictMode>
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

let hasRender = false;
const renderApp = () =>
{
  if ( !hasRender )
  {
    ReactDOM.render( App, document.getElementById( 'root' ) );
    hasRender = true;
  }
};

ReactDOM.render( loading, document.getElementById( 'root' ) );

firebase.auth().onAuthStateChanged( ( user ) =>
{
  if ( user )
  {
    store.dispatch( login( user.uid ) );
    store.dispatch( startSetSection() ).then( () =>
    {
      renderApp();
    } );
    if ( history.location.pathname === '/' ) history.push( `/dash` );
  } else
  {
    store.dispatch( logout() );
    renderApp();
    history.push( '/' );
  }
} );