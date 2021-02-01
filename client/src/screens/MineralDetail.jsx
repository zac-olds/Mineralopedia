// DEPENDENCIES
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getOneMineral} from "../services/minerals";

// STYLES
import "../styles/MineralDetail.css";

const MineralDetail = () => {
  // Set up state for single mineral API call
  const [mineral, setMineral] = useState(null);

  // Grab the mineral ID from params
  const {id} = useParams();

  // API call for a single mineral based on the ID from params. Will refresh each time ID changes.
  useEffect(() => {
    const fetchMineralData = async () => {
      const mineralData = await getOneMineral(id);
      setMineral(mineralData);
    };
    fetchMineralData();
  }, [id]);

  // debugger;
  return (
    <div>
      <img src={mineral?.img_url} className="mineral-detail-image" />
      <h2>{mineral?.name}</h2>
      <p>{`Color: ${mineral?.color}`}</p>
      <p>{`Luster: ${mineral?.luster}`}</p>
      <p>{`Streak: ${mineral?.streak}`}</p>
      <p>{`Hardness: ${mineral?.hardness_min}-${mineral?.hardness_max}`}</p>
      <p>{`Cleavage: ${mineral?.cleavage}`}</p>
      <p>{`Fracture: ${mineral?.fracture}`}</p>
      <p>{mineral?.description}</p>
    </div>
  );
};

export default MineralDetail;
