import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const locations = [
  {
    id: 1,
    title: "تعمیرگاه رایان خودرو",
    lat: 32.639599,
    lng: 51.653654,
  },
  {
    id: 2,
    title: "مکانیکی علی",
    lat: 32.622671,
    lng: 51.661521,
  },
  {
    id: 3,
    title: "برق خودرو احمد",
    lat: 32.6235,
    lng: 51.6387,
  },
  {
    id: 4,
    title: " خدمات فنی نوین",
    lat: 32.648771,
    lng: 51.681534,
  },
];

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const ServiceMap = () => {
  return (
    <div className="w-full h-150 overflow-hidden border-blue-primary border-2 rounded-2xl">
      <MapContainer
        center={[32.6264, 51.6431]}
        zoom={14}
        className="w-full h-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={markerIcon}
          >
            <Popup>{location.title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ServiceMap;
