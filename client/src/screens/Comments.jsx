// DEPENDENCIES
import React, {useState, useEffect} from "react";
import {getComment, deleteComment} from "../services/comments";
import {useParams, Link} from "react-router-dom";

// COMPONENTS
import Comment from "./Comment";

// MATERIAL UI IMPORTS
import Button from "@material-ui/core/Button";
import CommentIcon from "@material-ui/icons/Comment";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// STYLES
import "../styles/Comments.css";

const Comments = (props) => {
  const [comments, setComments] = useState(null);
  const {id} = useParams();
  const {minerals} = props;
  const findMineral = minerals.filter((mineral) => {
    return mineral.id === Number(id);
  });
  console.log(findMineral);

  useEffect(() => {
    const getComments = async () => {
      const resp = await getComment(id);
      setComments(resp);
    };
    getComments();
  }, [id]);

  const handleDelete = async (id) => {
    await deleteComment(id);
    setComments((prevState) =>
      prevState.filter((comment) => {
        return comment.id !== Number(id);
      })
    );
  };

  return (
    <div className="comment-container">
      <h2>Comments</h2>
      <img
        className="comment-image"
        src={findMineral[0].img_url}
        alt={findMineral[0].name}
      />
      {comments &&
        comments.map((comment) => {
          return (
            <Comment
              comment={comment}
              key={comment.id}
              handleDelete={handleDelete}
              setComments={setComments}
            />
          );
        })}
      <Link to={`/minerals/${id}/comments/add-comment`}>
        <Button
          variant="contained"
          color="primary"
          id="add-comment-button"
          startIcon={<CommentIcon />}
        >
          Add Comment
        </Button>
      </Link>
      <Link to={`/minerals/${id}`}>
        <Button variant="contained" color="primary" id="back-button">
          <ArrowBackIcon />
        </Button>
      </Link>
    </div>
  );
};

export default Comments;
