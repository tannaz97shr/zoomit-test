import React, {useState} from 'react';
import {Route} from "react-router";
import {NavLink} from "react-router-dom";

import PostDetails from "./postDetails";
import AllPosts from "./allPosts";
import Features from "./features";
import Modal from "./UI/Modal/Modal";

const Posts = () => {

    const [featuresOpen, setFeaturesOpen] = useState(false);

    const featureCancelHandler = () => {
        setFeaturesOpen(false);
    };

    return (
        <div>
            <Modal
                show={featuresOpen}
                modalClosed={featureCancelHandler}
            >
                <Features/>
            </Modal>
            <div className="navbar">
                <NavLink
                    to="/"
                    exact
                    activeClassName="home-active"
                    className="home"
                >Home</NavLink>
                <button
                    className="features-btn"
                    onClick={() => setFeaturesOpen(true)}>
                    Click here
                </button>
            </div>
            <Route path='/' exact component={AllPosts}/>
            <Route path='/:id' exact component={PostDetails}/>
        </div>
    )
};

export default Posts;