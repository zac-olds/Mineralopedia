import React, {useState} from "react";
import {useParams, useHistory} from "react-router-dom";
import {postComment} from "../services/comments";

// MATERIAL UI IMPORTS
import Button from "@material-ui/core/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import TextField from "@material-ui/core/TextField";

// STYLES
import "../styles/AddComment.css";

const AddComment = (props) => {
  // const {comments, setComments} = props;

  const [formData, setFormData] = useState({
    content: "",
  });
  const {id} = useParams();
  const history = useHistory();

  const {content} = formData;

  // Handle change in input
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handles creating new posts
  const handleCreate = async (mineral_id, commentData) => {
    await postComment(mineral_id, commentData);
    history.push(`/minerals/${id}/comments`);
  };

  // Handle sumbitting form for posting comment
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleCreate(id, formData);
  };

  return (
    <div className="add-comment-container">
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="content"
          label="Comment:"
          variant="standard"
          value={content}
          onChange={handleChange}
          multiline
          rowsMax={4}
        />
        <br />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          id="submit-comment-button"
          startIcon={<CheckCircleIcon />}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddComment;
