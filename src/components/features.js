import React from 'react';

const Features = () => {
    return (
        <div className="features">
            some of the features of this website:
            <ul>
                <li>
                    Click on the "more" icon on each post while (which will be displayed on hovering) to see amazing data including Post details, user's personal information and more importantly the location of each user on the map.
                </li>
                <li>
                    I used Routing to build a single page web application. (notice the url after selecting a post)
                </li>
                <li>
                    This web application is responsive.
                </li>
                <li>
                    Leaflet is used to show user's location.
                </li>
            </ul>
        </div>
    )
};

export default Features;