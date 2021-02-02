// DEPENDENCIES
import React, {useState, useEffect} from "react";
import {postComment} from "../services/comments";
import {useParams, Link} from "react-router-dom";

// COMPONENTS
import Comment from "./Comment";

// MATERIAL UI IMPORTS
import Button from "@material-ui/core/Button";
import CommentIcon from "@material-ui/icons/Comment";

const Comments = (props) => {
  const [mineral, setMineral] = useState(null);
  const {id} = useParams();
  const {handleDelete, setComments} = props;

  useEffect(() => {
    const mineralFind = props.minerals.find((mineral) => {
      return mineral.id === Number(id);
    });
    setMineral(mineralFind);
  }, []);

  return (
    <div>
      <h2>Comment</h2>
      {mineral &&
        mineral.comments.map((comment) => {
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
