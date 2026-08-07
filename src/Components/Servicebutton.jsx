import React from "react";

const Servicebutton = ({ title, Icon }) => {
  return (
    <div className="flex-center max-w-100 w-75 sm:w-90 h-20 border-blue-950 border-2 rounded-2xl p-3 gap-3">
      <Icon size={40} />
      <h5>{title}</h5>
    </div>
  );
};

export default Servicebutton;