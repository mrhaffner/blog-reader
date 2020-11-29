import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import BlogsPage from './components/BlogsPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    //maybe have an isloading state set true here that is removed at the end
    getPosts()

  }, [])

  const getPosts = async () => {
    try {
      const response = await fetch('http://localhost:3000/blog', {method: 'GET', mode: 'cors'})
      const data = await response.json()
      console.log(data)
      setPosts(data)
    } catch (error) {
      alert(error)
    }
  }

  // const getPosts = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3000/blog', {mode: 'cors'});
  //     console.log(response);
  //     setPosts([response])
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // }

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
        <Route path='/blog'>
            <BlogsPage />
          </Route>
          <Route path='/'>
            <HomePage posts={posts} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
