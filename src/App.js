import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import PostPage from './components/PostPage';
import BlogsPage from './components/BlogsPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios'; //remove axios if you're not going to use it

const App = () => {
  const [posts, setPosts] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const hyphenate = (str) => {
      return str.toLowerCase().split(' ').join('-')
    }
  
    const addHyphenTitle = (arr) => {
      arr.forEach((obj) => {
        obj.hyphenTitle = hyphenate(obj.title)
      })
    }
    const getPosts = async () => {
      try {
        //set isLoading to true?
        const response = await fetch('http://localhost:3000/blog', {method: 'GET', mode: 'cors'})
        const data = await response.json()
        addHyphenTitle(data)
        setPosts(data.reverse())
        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    getPosts()
  }, [])

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path='/blog/:hyphenTitle' 
            render={() => {
              return ( isLoading ? <h2>Loading Page</h2> : <PostPage posts={posts} />)
            }}>
          </Route>
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
