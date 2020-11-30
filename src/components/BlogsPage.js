import React from 'react';
import BlogList from './BlogList';

const BlogsPage = (props) => {
    const { posts, isLoading } = props;
    return (
        <div>
            {isLoading ? <h2>Loading Blogs</h2> : <BlogList posts={posts} />}
        </div>
    );
}

export default BlogsPage;