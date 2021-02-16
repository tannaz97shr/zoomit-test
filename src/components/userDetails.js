import React, {useEffect, useState} from 'react';
import axios from "axios";

import Spinner from "./UI/Spinner/Spinner";
import UsersOnMap from "./usersOnMap";

const UserDetails = ({userId}) => {

    const [myElement, setMyElement] = useState(<Spinner/>);
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then(response => {
            setUser(response.data);
        }).catch(error => {
            setMyElement(<div>something went wrong</div>);
        })
    }, []);

    useEffect(() => {
        if (user.id) {
            setMyElement(
                <div className="card">
                    <img src={require("../assets/images/profiles/" + user.id +".jpg").default}/>
                    <h1>{user.name ? user.name : null}</h1>
                    <p className="card-title">{user.username ? user.username : null}</p>
                    <p>{user.company.name ? user.company.name : null}</p>
                    <div>
                        email: {user.email ? user.email : null}
                    </div>
                    <a className="card-social-icon" href="#"><i className="fa fa-dribbble"></i></a>
                    <a className="card-social-icon" href="#"><i className="fa fa-twitter"></i></a>
                    <a className="card-social-icon" href="#"><i className="fa fa-linkedin"></i></a>
                    <a className="card-social-icon" href="#"><i className="fa fa-facebook"></i></a>
                    <p>
                        {user.phone ? <a href={"tel: " + user.phone}><button>Contact</button></a> : null}
                    </p>
                </div>
            )
        }
    }, [user]);

    return (
        <div>
            {myElement}
            {user.address ? <UsersOnMap position={[user.address.geo.lat, user.address.geo.lng]} /> : null}
        </div>
    )
};

export default UserDetails;