import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapComponent = withScriptjs(withGoogleMap((props) => {
  let centerLat = 0;
  let centerLng = 0;
  props.locations.forEach((location) => {
    centerLat += location['Coordinates'].latitude;
    centerLng += location['Coordinates'].longitude;
  })
  centerLat /= 6;
  centerLng /= 6;
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{lat: centerLat, lng: centerLng}}
    >
      {props.locations.map(location => {
        const coordinates = location['Coordinates'];
        return (
          <Marker position={{ lat: coordinates.latitude, lng: coordinates.longitude }} />
        );
      })}
    </GoogleMap>
  );
}));

const LocationsMap = (props) => (
  <MapComponent
    locations={props.locations}
    googleMapURL={props.mapURL}
    loadingElement={<div style={{ height: '100%'}} />}
    containerElement={<div style={{ height: 400 }} />}
    mapElement={<div style={{ height: '100%'}} />}
  />
)

export default LocationsMap;
