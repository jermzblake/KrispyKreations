import logo from '../../logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Test from '../test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Route exact path='/test' render={() => (
        <Test/>
        )}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
