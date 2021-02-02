import React, {useState} from "react";
import {useParams, Link} from "react-router-dom";
import {postComment} from "../services/comments";

// MATERIAL UI IMPORTS
import Button from "@material-ui/core/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import TextField from "@material-ui/core/TextField";

const AddComment = () => {
  const [formData, setFormData] = useState({
    content: "",
  });
  const {id} = useParams();

  const {content} = formData;

  // Handle change in input
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle sumbitting form for posting comment
  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(Number(id), formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="content"
          label="Comment:"
          variant="outlined"
          value={content}
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
    </div>
  );
};

export default AddComment;
