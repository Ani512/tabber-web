import { connect } from 'react-redux';
import '../styles/css/App.css';
import { startLogin } from '../actions/authActions';

const Login = ( props ) =>
(
  <div className="App">
    <header className="App-header">
      <h2>Tabber</h2>
      <button className="btn login-btn" onClick={ props.startLogin }>Login</button>
    </header>
  </div>
);

const mapDispatchToProps = ( dispatch ) => (
  {
    startLogin: () => dispatch( startLogin() )
  }
);
export default connect( undefined, mapDispatchToProps )( Login );
