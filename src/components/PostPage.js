import React, {useState } from 'react';
import { useParams } from "react-router-dom";

const PostPage = (props) => {
    const { posts } = props;
    let params = useParams()
    const post = posts.find((obj) => {
        return obj.hyphenTitle === params.hyphenTitle
    });

    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(JSON.stringify({ author, text }))
        try {
            const response = await fetch(`http://localhost:3000/blog/${post['_id']}/comment`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ author, text }),
            })
            const data = await response
            console.log(data)
        } catch (err) {
            alert(err) //change for production, don't want an alert
        }
    };

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
                <form action="">
                    <label htmlFor="author">Name</label><br/>
                    <input type="text" onChange={(e) => setAuthor(e.target.value)} /><br/>
                    <label htmlFor="text">Message</label><br/>
                    <textarea name="" id="" cols="30" rows="10" onChange={(e) => setText(e.target.value)} /><br/>
                    <button onClick={handleSubmit} >Submit Comment</button>
                </form>
            </div>
        </div>
    );
}

export default PostPage;