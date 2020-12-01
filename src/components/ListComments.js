import React from 'react';

const ListComments = (props) => {
    const { comments, postId, } = props
    const list = comments.filter(comment => comment.post === postId).reverse()

    return (
        <div>
            {list.map((comment) => {
                return (
                    <div key={comment["_id"]}>
                        <h4>By {comment.author} on {comment.date}</h4>
                        <p>{comment.text}</p>
                    </div>
                )
            })}
        </div>
    )
    
}

export default ListComments;