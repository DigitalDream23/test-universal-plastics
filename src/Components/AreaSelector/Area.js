import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Circle, Popup, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import L from "leaflet";

const LocationMarker = ({ latitude, longitude, zoomLevel, icon }) => {
  const map = useMap();
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (latitude && longitude) {
      setPosition([latitude, longitude]);
      map.flyTo([latitude, longitude], zoomLevel);
    }
  }, [latitude, longitude, map, zoomLevel]);

  return position === null ? null : (
    <Marker position={position} icon={icon}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

const Area = ({ latitude, longitude }) => {
  const [zoom, setZoom] = useState(11);
  const circleRadius = 1000;

  const icon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    shadowUrl: iconShadow,
    iconSize: [25, 41], 
    iconAnchor: [12, 41], 
    popupAnchor: [1, -34], 
  });

  useEffect(() => {
  
    setZoom(zoom);
  }, [zoom]);

  return (
    <section className="w-[343px] mt-[15px]">
      <div className="flex justify-between items-center mb-[12px]">
        <h2 className="text-[17px] font-Inter font-semibold text-[#14143F]">Area</h2>
        <p className="font-Inter font-normal text-[10.88px] leading-3 text-[#595977]">max 20 km</p>
      </div>
      <input
        type="range"
        min={10}
        max={14}
        step={1}
        value={zoom}
        onChange={(e) => setZoom(Number(e.target.value))}
        className="w-full accent-[#42C3EE] outline-none"
      />
      <MapContainer
        center={[latitude, longitude]}
        zoom={zoom}
        style={{ width: '100%', height: '200px', borderRadius: '10px' }}
        zoomControl={false}
      >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <LocationMarker latitude={latitude} longitude={longitude} zoomLevel={zoom} icon={icon} />
          <Circle center={[latitude, longitude]} radius={1000} fillColor="#42C3EE" fillOpacity={0.3} />
      </MapContainer>
    </section>
  );
};

export default Area;