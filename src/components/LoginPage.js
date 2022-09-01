import { connect } from 'react-redux';
import '../styles/css/App.css';
import { startLogin } from '../actions/authActions';
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Login = ( props ) =>
(
  <div className="App">
    <header className="App-header">
      <h1>Tabber</h1>
      <Button variant="contained" className="btn login-btn" onClick={ props.startLogin } color="primary">Login</Button>
      <a style={{ marginTop: '5%' }} href="https://github.com/Ani512/tabber-web" target="blank"><GitHubIcon sx={{ fontSize: 50 }} /></a>
    </header>
  </div>
);

const mapDispatchToProps = ( dispatch ) => (
  {
    startLogin: () => dispatch( startLogin() )
  }
);
export default connect( undefined, mapDispatchToProps )( Login );
