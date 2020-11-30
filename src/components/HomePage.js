import React from 'react';
import PostTeaser from './PostTeaser';

const HomePage = (props) => {
  const { posts, isLoading, comments } = props;
  return (
    <div>
      <h1>Welcome to The World's Greatest Blog</h1>
      {isLoading ? <h2>Loading Blogs</h2> : <PostTeaser title={posts[0].title} date={posts[0].date} hyphenTitle={posts[0].hyphenTitle} />}
      <button onClick={() => console.log(posts, comments)}>Log</button>
    </div>
  );
}

export default HomePage;