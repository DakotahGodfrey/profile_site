import React from "react";

const Stack = ({ item }) => {
  return (
    <div className="tech">
      {item.tech}
      {item.logo ? (
        <i style={{ color: item.color }} className={item.logo}></i>
      ) : item.logoSVG ? (
        <div className="logoSvg">
          <img src={item.logoSVG} alt={item.tech} />
        </div>
      ) : null}
    </div>
  );
};

export default Stack;
