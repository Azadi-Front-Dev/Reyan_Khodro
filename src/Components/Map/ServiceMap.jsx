import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

const locations = [
  {
    id: 1,
    title: "تعمیرگاه رایان خودرو",
    description: "تعمیرات تخصصی موتور و گیربکس",
    city: "اصفهان",
    service: "مکانیکی",
    brand: "پژو",
    carType: "سواری",
    lat: 32.6264,
    lng: 51.6431,
  },
  {
    id: 2,
    title: "خدمات فنی رایان خودرو",
    description: "ارائه خدمات فنی خودرو",
    city: "اصفهان",
    service: "خدمات فنی",
    brand: "سمند",
    carType: "سواری",
    lat: 32.706113,
    lng: 51.642585,
  },
  {
    id: 3,
    title: "مکانیکی علی",
    description: "تعمیر موتور و گیربکس",
    city: "اصفهان",
    service: "مکانیکی",
    brand: "پراید",
    carType: "سواری",
    lat: 32.636962,
    lng: 51.653967,
  },
  {
    id: 4,
    title: "باتری سازی و برق خودرو",
    description: "خدمات برق و باتری خودرو",
    city: "اصفهان",
    service: "برق خودرو",
    brand: "پژو",
    carType: "سواری",
    lat: 32.6235,
    lng: 51.6387,
  },
  {
    id: 5,
    title: "مکانیکی تهران",
    description: "تعمیرات تخصصی خودرو",
    city: "تهران",
    service: "مکانیکی",
    brand: "پژو",
    carType: "سواری",
    lat: 35.6892,
    lng: 51.389,
  },
];

const cityCoordinates = {
  اصفهان: [32.6264, 51.6431],
  تهران: [35.6892, 51.389],
  شیراز: [29.5918, 52.5837],
  مشهد: [36.2605, 59.6168],
};

const MapController = ({ city }) => {
  const map = useMap();

  useEffect(() => {
    if (!city || !cityCoordinates[city]) return;

    const [lat, lng] = cityCoordinates[city];

    map.flyTo([lat, lng], 12, {
      duration: 1.5,
    });
  }, [city, map]);

  return null;
};

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const ServiceMap = ({ filters = {}, onLocationSelect = () => {} }) => {
  const filteredLocations = locations.filter((location) => {
    return (
      (!filters.city || location.city === filters.city) &&
      (!filters.service || location.service === filters.service) &&
      (!filters.brand || location.brand === filters.brand) &&
      (!filters.carType || location.carType === filters.carType)
    );
  });

  return (
    <div className="w-full h-125 overflow-hidden rounded-2xl">
      <MapContainer center={[32.6264, 51.6431]} zoom={14} className="w-full h-full">
        <MapController city={filters.city} />

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />

        {filteredLocations.map((location) => (
         <Marker key={location.id} position={[location.lat, location.lng]} icon={markerIcon} eventHandlers={{ click: () => onLocationSelect(location) }}>
            <Popup>
              <div className="w-60 p-2 text-right" dir="rtl">
                <h3 className="mb-2 text-base font-bold text-gray-800">{location.title}</h3>
                <p className="mb-4 text-xs leading-6 text-gray-500">{location.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ServiceMap;