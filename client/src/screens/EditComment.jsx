import React, {useState, useEffect} from "react";
import {useParams, Redirect} from "react-router-dom";
import {getOneMineral} from "../services/minerals";
import {putComment} from "../services/comments";

// MATERIAL UI IMPORTS
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const EditComment = () => {
  const [comment, setComment] = useState(null);
  // const [isUpdated, setUpdated] = useState(false);
  const {mineral_id, id} = useParams();

  // State pulling in comment by ID
  useEffect(() => {
    const fetchMineralData = async () => {
      const mineralData = await getOneMineral(mineral_id);
      setComment(mineralData.comments[id - 1]);
    };
    fetchMineralData();
  }, [id]);

  // Handle Change
  const handleChange = (event) => {
    let {name, value} = event.target;
    setComment({
      ...comment,
      [name]: value,
    });
  };

  // Handle submitting form for editing a comment
  const handleSubmit = (e) => {
    e.preventDefault();
    putComment(comment.mineral_id, id, comment.content);
  };

  return (
    <div>
      {comment && (
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            name="content"
            label="Content:"
            variant="outlined"
            color="primary"
            multiline
            rowsMax={6}
            value={comment.content}
            onChange={handleChange}
          />
          <br />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            startIcon={<CheckCircleIcon />}
          >
            Submit
          </Button>
        </form>
      )}
    </div>
  );
};

export default EditComment;
