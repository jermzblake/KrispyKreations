import logo from '../../logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Test from '../test';
// Pages
import SignupPage from '../SignupPage/SignupPage';

function App() {
  const [user, setUser] = useState(null);
  const [recipeBook, setRecipeBook] = useState(null);


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
        <SignupPage history={history} />
      )}/>
    </div>
  );
}

export default App;
