import { connect } from 'react-redux';
import '../styles/css/App.css';
import { startLogin } from '../actions/authActions';
import { Button } from '@mui/material';

const Login = ( props ) =>
(
  <div className="App">
    <header className="App-header">
      <h2>Tabber</h2>
      <Button variant="contained" className="btn login-btn" onClick={ props.startLogin } color="primary">Login</Button>
    </header>
  </div>
);

const mapDispatchToProps = ( dispatch ) => (
  {
    startLogin: () => dispatch( startLogin() )
  }
);
export default connect( undefined, mapDispatchToProps )( Login );
