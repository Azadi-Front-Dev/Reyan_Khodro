import React, { useState } from "react";
import MapFilters from "../Components/Map/MapFilters";
import ServiceMap from "../Components/Map/ServiceMap";


const MapDetails = () => {
  const [filters, setFilters] = useState({
    city: "",
    service: "",
    brand: "",
    carType: "",
  });

  return (
    <div
      className="w-full flex flex-col-center lg:flex-row lg:items-start lg:justify-center p-5 gap-3 mt-20"
      dir="rtl"
    >
      <MapFilters
        filters={filters}
        setFilters={setFilters}
      />

      <ServiceMap
        filters={filters}
      />
    </div>
  );
};

export default MapDetails;