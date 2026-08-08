import React, { useState } from "react";

const ServiceList = ({ data }) => {
  const [active, setActive] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className=" w-full flex-col-reverse h-fit flex sm:flex-row-reverse gap-5 bg-white rounded-3xl max-w-5xl p-4">
      <div className="flex-1 bg-gray-50 rounded-2xl p-5 ">
        {active && (
          <>
            <h3 className="font-bold text-lg mb-5 text-blue-primary">
              {active.title}
            </h3>
            <ul className="space-y-3">
              {active.services.map((service) => (
                <li
                  key={service.name}
                  onClick={() => setSelectedService(service)}
                  className="cursor-pointer hover:text-blue-primary transition"
                >
                  {service.name}
                </li>
              ))}
            </ul>
            {selectedService && (
              <div className="mt-10">
                <h3 className="font-bold text-lg mb-3 text-blue-primary">
                  {selectedService.name}
                </h3>

                <p className="text-gray-600 mb-5">
                  {selectedService.description}
                </p>
                <table className="w-full border-collapse border text-right">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-3">نوع خودرو</th>
                      <th className="border p-3">قیمت تقریبی</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedService.prices.map((item) => (
                      <tr key={item.car}>
                        <td className="border p-3">{item.car}</td>
                        <td className="border p-3">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
      <div className="border-l pl-5">
        {data.categories.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              setActive(item);
              setSelectedService(null);
            }}
            className="p-3 rounded-xl cursor-pointer hover:bg-blue-100 flex justify-between items-center transition"
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
