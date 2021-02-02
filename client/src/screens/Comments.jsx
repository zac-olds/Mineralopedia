// DEPENDENCIES
import React, {useState, useEffect} from "react";
import {getComment, deleteComment} from "../services/comments";
import {useParams, Link} from "react-router-dom";

// COMPONENTS
import Comment from "./Comment";

// MATERIAL UI IMPORTS
import Button from "@material-ui/core/Button";
import CommentIcon from "@material-ui/icons/Comment";

const Comments = () => {
  const [comments, setComments] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    const getComments = async () => {
      const resp = await getComment(id);
      setComments(resp);
    };
    getComments();
  }, []);

  const handleDelete = async (id) => {
    await deleteComment(id);
    setComments((prevState) =>
      prevState.filter((comment) => {
        return comment.id !== Number(id);
      })
    );
  };

  return (
    <div>
      <h2>Comment</h2>
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
          type="submit"
          color="primary"
          startIcon={<CommentIcon />}
        >
          Add Comment
        </Button>
      </Link>
    </div>
  );
};

export default Comments;
