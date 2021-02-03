import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import {putComment, getOneComment} from "../services/comments";

// MATERIAL UI IMPORTS
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

// STYLES
import "../styles/EditComment.css";

const EditComment = () => {
  const [comment, setComment] = useState(null);
  // const [isUpdated, setUpdated] = useState(false);
  const {mineral_id, id} = useParams();
  const history = useHistory();

  // State pulling in comment by ID
  useEffect(() => {
    const fetchMineralData = async () => {
      const mineralData = await getOneComment(mineral_id, id);
      setComment(mineralData);
    };
    fetchMineralData();
  }, [mineral_id, id]);

  // Handle Change
  const handleChange = (event) => {
    let {name, value} = event.target;
    setComment({
      ...comment,
      [name]: value,
    });
  };

  // Handle submitting form for editing a comment
  const handleSubmit = async (e) => {
    e.preventDefault();
    await putComment(mineral_id, id, {
      content: comment.content,
    });
    history.push(`/minerals/${mineral_id}/comments`);
  };

  return (
    <div className="edit-comment-container">
      {comment && (
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            name="content"
            label="Content:"
            variant="standard"
            color="primary"
            onChange={handleChange}
            value={comment.content}
            multiline
            rowsMax={6}
          />
          <br />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            id="edit-button"
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
