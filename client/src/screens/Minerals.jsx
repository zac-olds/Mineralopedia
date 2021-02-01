import React from "react";
import {Link} from "react-router-dom";
import "../styles/Minerals.css";

const Minerals = (props) => {
  const {minerals} = props;
  // debugger;
  return (
    <div>
      <h2>Mineral Gallery</h2>
      {minerals.map((mineral) => {
        return (
          <Link to={`/minerals/${mineral.id}`} key={mineral.id}>
            <img
              src={mineral.img_url}
              alt={mineral.name}
              key={mineral.id}
              className="mineral-image"
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Minerals;
