import React, {useState} from "react";
import {postComment} from "../services/comments";
import {useParams} from "react-router-dom";

const Comment = () => {
  // const [formData, setFormData] = useState({
  //   content: "",
  //   mineral_id: "",
  //   user_id: "",
  // });

  // // Pull mineral ID using params in order to submit with form
  // const {id} = useParams();

  // const {username, content} = formData;

  // // Handle change in input
  // const handleChange = (e) => {
  //   const {name, value} = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // // Handle sumbitting form
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   postComment(formData);
  // };

  return (
    <div>
      <h2>Comment</h2>
    </div>
  );
};

export default Comment;
