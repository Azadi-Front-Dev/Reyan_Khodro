import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../Data/Services";
import ServiceDetails from "./ServiceDetails";

const Services = () => {
  const { servicename } = useParams();

  const service = services.find((item) => item.slug === servicename);

  if (!service) {
    return <div className="max-w-100 mx-auto flex-col-center my-20 p-5 ">
      <h1 className="text-center p-5">متاسفیم ! </h1>
      <h3 className="text-center p-5">سرویس مورد نظر یافت نشد .</h3>
      <img src="../Images/Services/not-found-service-page.png" alt="not found service" className="w-full h-full" />

    </div>
  }

  return <ServiceDetails data={service} />;
};

export default Services;
