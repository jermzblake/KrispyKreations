import logo from '../../logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Link } from 'react-router-dom';
// import pages
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import Test from '../test';
// import components
import NavBar from '../../components/NavBar/NavBar';
// import utilities
import userService from '../../utils/userService';
import recipeService from '../../utils/recipeService';

function App() {
  const [user, setUser] = useState(userService.getUser());
  const [recipeBook, setRecipeBook] = useState(null);

  const handleSignupOrLogin = () => {
    setUser(userService.getUser());
  }

  useEffect(() => {
    if (!recipeBook) return loadRecipeBook();
  })

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  }

  // was using this function to set recipe book state upon signup but trying new strategty
  // might not need this anymore
  const updateRecipeBook = (book) => {
    setRecipeBook({ book })
  }

  const loadRecipeBook = async () => {
    const book = await recipeService.index();
    console.log(`This is the index? : ${book}`)
    setRecipeBook(book);
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
      <Route exact path='/test' render={() => (
        <Test/>
      )}/>
      <Route exact path='/signup' render={({ history }) => (
        <SignupPage 
          history={history}
          handleSignup={handleSignupOrLogin}
          user={user}
          updateRecipeBook={updateRecipeBook}
        />
      )}/>
      <Route exact path='/login' render={({ history }) => (
        <LoginPage
          history={history}
          handleLogin={handleSignupOrLogin}
        />
      )}/>
    </div>
  );
}

export default App;
