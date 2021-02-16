import React, {useEffect, useState} from 'react';
import axios from "axios";
import SinglePost from "./singlePost";
import Spinner from "./UI/Spinner/Spinner";

const AllPosts = () => {

    const [myElement1, setMyElement] = useState(<Spinner/>)
    const [postsArray, setPostsArray] = useState([]);

    // fetch posts :
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            setPostsArray([...response.data.slice(0, 100)]);
        }).catch(error => {
            setMyElement( <div>Something went wrong</div>)
        });
    }, []);

    useEffect(() => {
        if (postsArray.length > 0) {
            setMyElement(<div className="all-posts">
                {
                    postsArray.map((post, index) => <SinglePost key={post.id} post={post} index={index}/>)
                }
            </div>);
        }
    }, [postsArray]);

    return (
        <div>{myElement1}</div>
    )

};

export default AllPosts;