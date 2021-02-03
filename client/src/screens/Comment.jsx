// DEPENDENCIES
import React from "react";
import {Link} from "react-router-dom";

// MATERIAL UI IMPORTS
import {Card, CardActions, CardContent, Button} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

// STYLES
import "../styles/Comment.css";

const Comment = (props) => {
  const {handleDelete} = props;

  return (
    <div>
      <Card>
        <CardContent>{props.comment.content}</CardContent>
        <CardActions>
          <Link
            to={`/minerals/${props.comment.mineral_id}/comments/${props.comment.id}`}
          >
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="small"
              id="comment-button"
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
          </Link>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            size="small"
            id="comment-button"
            startIcon={<DeleteIcon />}
            onClick={() => handleDelete(props.comment.id)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Comment;
