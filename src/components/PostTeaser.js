import React from 'react';
import { Link } from "react-router-dom";

const PostTeaser = (props) => {
    const { title, date, hyphenTitle, } = props;
    return (
        <div>
            <div>
                <Link to={`/blog/${hyphenTitle}`}>{title}</Link>
                <h4>By Admin on {date}</h4>
            </div>
        </div>
    );
}

export default PostTeaser;