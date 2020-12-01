import React, {useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ListComments from './ListComments';

const Comments = (props) => {
    const { post } = props
    let params = useParams()

    const [comments, setComments] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getComments = async () => {
          try {
            //set isLoading to true?
            const response = await fetch('http://localhost:3000/blog/comments', {method: 'GET', mode: 'cors'})
            const data = await response.json()
            //const list = data.filter(comment => comment.post === post["_id"]).reverse()
            console.log(data)
            setComments(data)
            setIsLoading(false)
          } catch (error) {
            alert(error)//don't want an alert in production
          }
        }
        getComments()
      }, [isLoading])

    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(JSON.stringify({ author, text, }))
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
            console.log('response:', data)
            setIsLoading(true)
        } catch (err) {
            console.log('error:', err)
        }
    };

    return (
        <div>
            <h3>Comments</h3>
            <div>
                <h4>Make New Comment</h4>
                <form action="">
                    <label htmlFor="author">Name</label><br/>
                    <input type="text" onChange={(e) => setAuthor(e.target.value)} /><br/>
                    <label htmlFor="text">Message</label><br/>
                    <textarea name="" id="" cols="30" rows="10" onChange={(e) => setText(e.target.value)} /><br/>
                    <button onClick={handleSubmit} >Submit Comment</button>
                </form>
            </div>
            {isLoading ? <h2>Comments Loading</h2> : <ListComments comments={comments} postId={post["_id"]} />}
        </div>
    );
}

export default Comments;