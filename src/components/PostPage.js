import React from 'react';
import { useParams } from "react-router-dom";
import Comments from './Comments'

const PostPage = (props) => {
    const { posts } = props;
    let params = useParams()
    const post = posts.find(obj => obj.hyphenTitle === params.hyphenTitle);

    return (
        <div>
            <div>
                <h2>{post.title}</h2>
                <h4>By Admin on {post.date}</h4>
                <p>{post.text}</p>
                <p>{params.hyphenTitle}</p>
            </div>
            <Comments post={post} />
        </div>
    );
}

export default PostPage;