import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import { GoogleApiKey } from "../others/apiKey"

const Map = () => {
    return (
        <GoogleMap
        defaultZoom={10}
        defaultCenter={ {lat:6.5244, lng:3.3792} }
        >
            <Marker
                position={ {
                    lat: 10,
                    lng: 10
                } }
            />
        </GoogleMap>
    )
};

const Wrappedmap = withScriptjs(withGoogleMap(Map));

const MapComponent = () => {
    return(
        <div style={ {height: '400px', width: '400px'} }>
            <div style={ { height: "100%", width:"100%" } }>
                <Wrappedmap
                    googleMapURL={`https:///maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GoogleApiKey}`}
                    loadingElements={<div style={ { height: "100%" } } />}
                    containerElements={<div style={ { height: "100%" } } />}
                    mapElements={<div style={ { height: "100%" } } />}
                />            
            </div>
        </div>
    )
}

export default MapComponent