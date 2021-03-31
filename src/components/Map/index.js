import React, { useEffect, useState } from 'react';
import api from 'services/api';

import Map from 'components/Map/Map';
import Marker from 'components/Marker';

import Fallback from 'components/Fallback';

const MapContainer = () => {
  const [chargingStations, setChargingStations] = useState([]);
  const [loading, setLoading] = useState(false);

  const getChargingStations = async () => {
    setLoading(true);
    try {
      const res = await api.get(
        'poi/?output=json&countrycode=DE&maxresults=10&compact=true&verbose=false&latitude=52.520008&longitude=13.404954&distance=10&distanceunit=KM'
      );
      setChargingStations(res.data);
    } catch (error) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getChargingStations();
  }, []);

  return (
    <Fallback fall={loading}>
      <h1>Charging stations in Berlin</h1>
      <Map>
        {chargingStations.map((chargingStation) => (
          <Marker
            lat={chargingStation.AddressInfo.Latitude}
            lng={chargingStation.AddressInfo.Longitude}
            text={chargingStation.AddressInfo.Title}
          ></Marker>
        ))}
      </Map>
    </Fallback>
  );
};

export default MapContainer;
