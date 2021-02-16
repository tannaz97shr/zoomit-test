import React, {useState} from 'react';
import {Link} from "react-router-dom";

import moreIcon from "../assets/images/more.png";

const SinglePost = (props) => {

    const states = ["postId", "userId"];
    const [currentState, setCurrentState] = useState(states[0]);

    const squareClicked = () => {
        if (currentState === states[0]) {
            setCurrentState(states[1])
        } else {
            setCurrentState(states[0])
        }
    };

    return (
        <div
            className={currentState === states[0] ? "single-post" + " post-id" : "single-post" + " user-id"}
            onClick={squareClicked}
        >
            <div className="single-post__state">
                {currentState === states[0] ? "post id" : "user id"}
            </div>
            <div className="single-post__id">
                {currentState === states[0] ?
                    props.post.id :
                    props.post.userId}
            </div>
            <Link to={{
                pathname: '/' + props.post.id
            }}>
                <img className="single-post__more" src={moreIcon} />
            </Link>
        </div>


    )
};

export default SinglePost;