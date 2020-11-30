import React from 'react';
import { useParams } from "react-router-dom";

const PostPage = (props) => {
    const { posts } = props;
    let params = useParams()

    const post = posts.find((obj) => {
        return obj.hyphenTitle === params.hyphenTitle
    })

    return (
        <div>
                <h3>{post.title}</h3>
                <h4>By Admin on {post.date}</h4>
                <p>{post.text}</p>
                <p>{params.hyphenTitle}</p>
        </div>
    );
}

export default PostPage;