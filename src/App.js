import { useAuth0 } from '@auth0/auth0-react';
import logo from './logo.svg';
import './App.css';
import { LoginButton } from './Login';
import { LogoutButton } from './Logout';
import { Profile } from './Profile'
function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {isAuthenticated ? <>
          <Profile/>
          <LogoutButton/>
        </> : <LoginButton/> }
        
      </header>
    </div>
  );
}

export default App;
