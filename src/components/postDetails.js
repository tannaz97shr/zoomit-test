import React, {useEffect, useState} from 'react';
import axios from "axios";

import Spinner from "./UI/Spinner/Spinner"
import UserDetails from "./userDetails";

const PostDetails = props => {

    const [myElement, setMyElement] = useState(<Spinner/>)
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`)
            .then(response => {
                setPost(response.data);
                console.log(" [post details] response.data", response.data);
            }).catch( error => {
                setMyElement(<div>something went wrong</div>);
        })
    }, []);

    useEffect( () => {
        if (post.id) {
            setMyElement(
                <div className="details">
                    <div className="post-details__title">{post.title ? post.title : null}</div>
                    <div className="post-details__body">{post.body ? post.body : null}</div>
                </div>
            )
        }
    }, [post]);

    return (
        <div>
            {myElement}
            {post.userId ? <UserDetails userId={post.userId} /> : null}
        </div>
    )
};

export default PostDetails;