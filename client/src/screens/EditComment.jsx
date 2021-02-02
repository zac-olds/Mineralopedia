import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import {putComment, getOneComment} from "../services/comments";

// MATERIAL UI IMPORTS
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

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
    <div>
      {comment && (
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            name="content"
            label="Content:"
            variant="outlined"
            color="primary"
            onChange={handleChange}
            multiline
            rowsMax={6}
            value={comment.content}
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
