import React from "react";

const Servicebutton = ({ title, Icon }) => {
  return (
    <div className="flex-center max-w-100 w-90 h-25 border-blue-950 border-2 rounded-2xl p-3 gap-3">
      <Icon size={40} />
      <h4>{title}</h4>
    </div>
  );
};

export default Servicebutton;