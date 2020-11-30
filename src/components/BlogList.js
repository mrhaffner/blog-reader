import React from 'react';
import PostTeaser from './PostTeaser'

const BlogList = (props) => {
    const { posts } = props;
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

export default BlogList;