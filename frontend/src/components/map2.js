import React from 'react';
import GoogleMapReact from 'google-map-react';
import { GoogleApiKey } from '../others/apiKey';
import { GoogleMarker } from "../others/Style"
import MarkerIcon from '../others/marker.png'

const Marker = ({ text, image }) => <GoogleMarker>{text} <img src={image} alt="marker"/></GoogleMarker>;

const Map = ({lat, lng, username}) => {

  return (
    <div style={{ height: '100%', width: '100%', border: "5px solid purple"}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GoogleApiKey }}
        center={[lat, lng]}
        defaultZoom={10}
      >
        <Marker
          lat={lat}
          lng={lng}
          text={username}
          image={MarkerIcon}
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map;