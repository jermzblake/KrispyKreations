import './App.css';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// import pages
import SignupPage from '../components/pages/SignupPage/SignupPage';
import LoginPage from '../components/pages/LoginPage/LoginPage';
import RecipeIndexPage from '../components/pages/RecipeIndexPage/RecipeIndexPage';
import LandingPage from '../components/pages/LandingPage/LandingPage';
import RecipeFormPage from '../components/pages/RecipeFormPage/RecipeFormPage';
import RecipeDetailPage from '../components/pages/RecipeDetailPage/RecipeDetailPage';
import RecipeUpdatePage from '../components/pages/RecipeUpdatePage/RecipeUpdatePage';
// import components
import NavBar from '../components/NavBar/NavBar';
// import utilities
import userService from '../utils/userService';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: green
  }
})

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
      <ThemeProvider theme={theme}>
      <header className="App-header">
        <NavBar
          user={user}
          handleLogout={handleLogout}
        />
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
          <RecipeIndexPage
            history={history}
            user={user}
          />
        )}/>
        <Route path="/recipebook/:id" render={props => 
          <RecipeDetailPage 
            {...props}
            user={user}
          />
        }/>
        <Route exact path='/recipeform' render={({ history }) => (
          <RecipeFormPage
            history={history}
            user={user}
          />
        )}/>
        <Route exact path='/recipe/edit/:id' render={props =>
          <RecipeUpdatePage
            {...props}
            user={user}
          />
        }/>
      </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
