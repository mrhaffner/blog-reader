import React from 'react';
import BlogsPage from './BlogsPage';

const HomePage = (props) => {
  const { posts, isLoading } = props;
  return (
    <div>
        <div>
            <h1>Welcome to The World's Greatest Blog</h1>
            {isLoading ? <h2>Loading Blogs</h2> : <BlogsPage posts={posts} />}
        </div>
    </div>
  );
}

export default HomePage;