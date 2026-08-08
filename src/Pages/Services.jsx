import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../Data/Services";
import ServiceDetails from "./ServiceDetails";

const Services = () => {
  const { servicename } = useParams();

  const service = services.find((item) => item.slug === servicename);

  if (!service) {
    return <h1>سرویس مورد نظر پیدا نشد</h1>;
  }

  return <ServiceDetails data={service} />;
};

export default Services;
