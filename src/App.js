import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import BlogsPage from './components/BlogsPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios'; //remove axios if you're not going to use it

const App = () => {
  const [posts, setPosts] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    try {
      //set isLoading to true?
      const response = await fetch('http://localhost:3000/blog', {method: 'GET', mode: 'cors'})
      const data = await response.json()
      setPosts(data.reverse())
      setIsLoading(false)
    } catch (error) {
      alert(error)//don't want an alert in production
    }
  }

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
        <Route path='/blog'>
            <BlogsPage posts={posts} isLoading={isLoading} />
          </Route>
          <Route path='/'>
            <HomePage posts={posts} isLoading={isLoading} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
