import React from 'react';
import PostTeaser from './PostTeaser';

const HomePage = (props) => {
  const { posts, isLoading } = props;
  return (
    <div>
      <h1>Welcome to The World's Greatest Blog</h1>
      {isLoading ? <h2>Loading Blogs</h2> : <PostTeaser title={posts[0].title} date={posts[0].date} />}
    </div>
  );
}

export default HomePage;