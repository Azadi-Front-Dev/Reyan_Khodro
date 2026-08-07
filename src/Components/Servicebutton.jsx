import React from "react";
import { Link } from "react-router-dom";

const Servicebutton = ({ title, Icon,route }) => {
  return (
    <Link to={route} className="flex-center max-w-100 w-75 sm:w-90 h-20 border-blue-950 border-2 rounded-2xl hover:bg-blue-300 p-3 gap-3">
      <Icon size={40} />
      <h5>{title}</h5>
    </Link>
  );
};

export default Servicebutton;