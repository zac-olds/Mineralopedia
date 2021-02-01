// DEPENDENCIES
import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
import {capitalStr} from "../services/helpers";
import {getOneMineral} from "../services/minerals";
import StarIcon from "@material-ui/icons/Star";
import Button from "@material-ui/core/Button";
import CommentIcon from "@material-ui/icons/Comment";

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

  // Add favorite

  // Remove favorite

  return (
    <div>
      {mineral && (
        <React.Fragment>
          <div
            style={{backgroundImage: `url(${mineral.img_url})`}}
            className="mineral-detail-image"
          >
            <StarIcon />
          </div>
          <h2>{capitalStr(mineral?.name)}</h2>
          <div>{`Color: ${mineral?.color}`}</div>
          <div>{`Luster: ${mineral?.luster}`}</div>
          <div>{`Streak: ${mineral?.streak}`}</div>
          <div>{`Hardness: ${mineral?.hardness_min}-${mineral?.hardness_max}`}</div>
          <div>{`Cleavage: ${mineral?.cleavage}`}</div>
          <div>{`Fracture: ${mineral?.fracture}`}</div>
          <br />
          <div>{mineral?.description}</div>
        </React.Fragment>
      )}
      <React.Fragment>
        <Link to={`/minerals/${id}/comments`}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            startIcon={<CommentIcon />}
          >
            Comments
          </Button>
        </Link>
      </React.Fragment>
    </div>
  );
};

export default MineralDetail;