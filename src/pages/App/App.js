import logo from '../../logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// import pages
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import RecipeBookPage from '../RecipeBookPage/RecipeBookPage';
import LandingPage from '../LandingPage/LandingPage';
import RecipeFormPage from '../RecipeFormPage/RecipeFormPage';
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

  return (
    <div className="App">
      <header className="App-header">
        <NavBar
          user={user}
          handleLogout={handleLogout}
        />

        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <Switch>
        <Route exact path='/' render={({ history }) => (
          <LandingPage
            history={history}
            user={user}
          />
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
        <Route exact path='/recipebook' render={({ history }) => (
          <RecipeBookPage
            history={history}
            user={user}
          />
        )}/>
        <Route exact path='/recipeform' render={({ history }) => (
          <RecipeFormPage
            history={history}
            user={user}
          />
        )}/>
      </Switch>
    </div>
  );
}

export default App;
