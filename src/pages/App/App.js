import logo from '../../logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Link } from 'react-router-dom';
// import pages
import SignupPage from '../SignupPage/SignupPage';
import Test from '../test';
// import components
import NavBar from '../../components/NavBar/NavBar';
// import utilities
import userService from '../../utils/userService';

function App() {
  const [user, setUser] = useState(userService.getUser());
  const [recipeBook, setRecipeBook] = useState(null);

  const handleSignupOrLogin = () => {
    setUser(userService.getUser());
  }



  return (
    <div className="App">
      <header className="App-header">
        <NavBar />

        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <Route exact path='/test' render={() => (
        <Test/>
      )}/>
      <Route exact path='/signup' render={({ history }) => (
        <SignupPage 
          history={history}
          handleSignup={handleSignupOrLogin}
          user={user}
          
        />
      )}/>
    </div>
  );
}

export default App;
