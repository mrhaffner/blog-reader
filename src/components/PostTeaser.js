import React from 'react';

const PostTeaser = (props) => {
    const { title, date, } = props;
    return (
        <div>
            <div>
                <h3>{title}</h3>
                <h4>By Admin on {date}</h4>
            </div>
        </div>
    );
}

export default PostTeaser;