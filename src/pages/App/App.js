import logo from '../../logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
// import pages
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import RecipeBookPage from '../RecipeBookPage/RecipeBookPage';
import Test from '../test';
// import components
import NavBar from '../../components/NavBar/NavBar';
// import utilities
import userService from '../../utils/userService';

function App() {
  const [user, setUser] = useState(userService.getUser());

  const handleSignupOrLogin = () => {
    setUser(userService.getUser());
  }

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  }

  let book = user ? 
    <Link to='/recipeBook'>Recipe Book</Link>
    : 
    <h1>Krispy Kreations</h1>


  return (
    <div className="App">
      <header className="App-header">
        <NavBar
          user={user}
          handleLogout={handleLogout}
        />

        <img src={logo} className="App-logo" alt="logo" />

      </header>
      {/* Either link to user recipe book or title heading */}
      { book }
      <Switch>
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
        <Route exact path='/login' render={({ history }) => (
          <LoginPage
            history={history}
            handleLogin={handleSignupOrLogin}
          />
        )}/>
        <Route exact path='/recipeBook' render={({ history }) => (
          <RecipeBookPage
            history={history}
            user={user}
          />
        )}/>
      </Switch>
    </div>
  );
}

export default App;
