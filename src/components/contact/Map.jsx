import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import custom icon (if stored in src/assets/)
import customMarker from "/images/map.png"; // Adjust path if needed

// Create custom marker icon
const customIcon = new L.Icon({
  iconUrl: customMarker, // Use your custom icon file
  iconSize: [40, 53.33], // Adjust size
  iconAnchor: [20, 40], // Center icon properly
  popupAnchor: [0, -40], // Adjust popup position
});

function Map() {
  return (
    <div className="p-lg-5 p-3 map-container">
      <MapContainer
        center={[12.9834, 80.2329]}
        zoom={15}
        scrollWheelZoom={false}
        doubleClickZoo={true}
        touchZoom={true}
        style={{ height: "400px", width: "100%", borderRadius: "10px" }}
      >
        <TileLayer 
  url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=7176e356-18bf-4fad-87e3-e42922a0fdb4"
  attribution='&copy; TRANSVAAL INFO TECH'
/> 
        {/* Custom Marker */}
        <Marker position={[12.9834, 80.2329]} icon={customIcon}>
          <Popup>Transvaal Info Tech</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
