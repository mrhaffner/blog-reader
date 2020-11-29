import React from 'react';

const HomePage = (props) => {
  const { posts } = props;
  const log = () => console.log(posts, 'hi')
  return (
    <div>
        <div>
            <h1>Welcome to The World's Greatest Blog</h1>
            <button onClick={log}>Posts</button>
        </div>
    </div>
  );
}

export default HomePage;