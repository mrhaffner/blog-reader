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
            <div>
                <h2>{post.title}</h2>
                <h4>By Admin on {post.date}</h4>
                <p>{post.text}</p>
                <p>{params.hyphenTitle}</p>
            </div>
            <div>
                <h3>Comments</h3>
                <form action="POST">
                    <label htmlFor="author">Name</label><br/>
                    <input type="text"/><br/>
                    <label htmlFor="text">Message</label><br/>
                    <textarea name="" id="" cols="30" rows="10"></textarea><br/>
                    <button>Submit Comment</button>
                </form>
            </div>
        </div>
    );
}

export default PostPage;