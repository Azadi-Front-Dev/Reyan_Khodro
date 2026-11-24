import React, { useState } from "react";
import MapFilters from "../Components/Map/MapFilters";
import ServiceMap from "../Components/Map/ServiceMap";
import LocationBottomSheet from "../Components/Map/LocationBottomSheet";

const MapDetails = () => {
  const [filters, setFilters] = useState({
    city: "",
    service: "",
    brand: "",
    carType: "",
  });

const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="relative w-full">
      <ServiceMap filters={filters} onLocationSelect={setSelectedLocation} />

      <LocationBottomSheet location={selectedLocation} onClose={() => setSelectedLocation(null)} />
    </div>
  );
};

export default MapDetails;