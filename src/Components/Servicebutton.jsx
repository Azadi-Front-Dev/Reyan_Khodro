import React from "react";
import { Link } from "react-router-dom";

const Servicebutton = ({ title, Icon, route }) => {
  return (
    <Link
      to={route}
      className="flex-col-center w-35 h-35 sm:w-65 md:w-90 md:max-w-100 border-blue-950 border-2 rounded-2xl hover:bg-blue-300 p-3 gap-3"
    >
      <Icon size={40} />
      <h5 className="text-center">{title}</h5>
    </Link>
  );
};

export default Servicebutton;
