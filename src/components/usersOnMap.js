import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';


const UsersOnMap = props => {


    const iconPerson = new L.Icon({
        iconUrl: require('../assets/images/placeholder.png').default,
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(50, 65),

    });

    return (
        <div>
            <MapContainer className="map-container" center={props.position} zoom={4}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={iconPerson} position={props.position}/>
            </MapContainer>
        </div>
    )
};

export default UsersOnMap;