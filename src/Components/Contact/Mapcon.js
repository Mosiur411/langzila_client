import { Icon } from 'leaflet';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Mapcon = () => {
  const babyicon = new Icon({
    iconUrl: 'location.png',
    iconSize: [50, 50]

  })
  return (
    <div className='mt-6'>
      <MapContainer center={[
        23.7937
        , 90.4066]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution=' <a href="#">Langzila</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[23.793890608098497, 90.40535937426273]} icon={babyicon} >
          <Popup>
            We are Langzila. <br /> Best Learning Platform.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Mapcon;