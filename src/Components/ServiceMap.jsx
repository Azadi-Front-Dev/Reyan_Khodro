import React from "react";

const ServiceMap = () => {
  return (
    <div className="w-full h-150 overflow-hidden border-blue-primary border-2 rounded-2xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4752.098402105164!2d51.64317859082536!3d32.62640300897767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1786224368146!5m2!1sen!2s"
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};

export default ServiceMap;