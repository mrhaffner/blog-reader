import React from 'react';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import BlogsPage from './components/BlogsPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
        <Route path='/blog'>
            <BlogsPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
