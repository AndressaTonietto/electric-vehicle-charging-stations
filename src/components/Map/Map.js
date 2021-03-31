import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ children }) => {
  return (
    <div style={{ height: '60vh', width: '70%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD6T8zNeCCXnR0NhbSplOFvaHG6Jfa6X70' }}
        defaultCenter={{ lat: 52.52, lng: 13.405 }}
        defaultZoom={15}
      >
        {children}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
