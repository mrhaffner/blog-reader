import React from 'react';
import PostTeaser from './PostTeaser'

const BlogsPage = (props) => {
    const { posts } = props;
    //add condition for if it is published???
    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post._id}>
                    <PostTeaser title={post.title} date={post.date} />
                </div>
                )
            })}
        </div>
    );
}

export default BlogsPage;