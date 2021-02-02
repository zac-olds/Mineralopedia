import React from "react";
import {Link, useParams} from "react-router-dom";

// MATERIAL UI IMPORTS
import {Card, CardActions, CardContent, Button} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const Comment = (props) => {
  // return <Redirect to={`/minerals/${id}/comments`} />;
  const {handleDelete, comment, setComments} = props;
  const {id} = useParams();

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
