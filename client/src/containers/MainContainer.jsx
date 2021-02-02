// DEPENDENCIES
import {useState, useEffect} from "react";
import {Switch, Route} from "react-router-dom";
import {getAllMinerals} from "../services/minerals";
import {putComment} from "../services/comments";

// COMPONENTS
import Minerals from "../screens/Minerals";
import MineralDetail from "../screens/MineralDetail";
import Comments from "../screens/Comments";
import AddComment from "../screens/AddComment";
import EditComment from "../screens/EditComment";
// import Comment from "../screens/Comment";

const MainContainer = () => {
  const [minerals, setMinerals] = useState([]);
  const [comments, setComments] = useState([]);

  // const history = useHistory();

  useEffect(() => {
    const fetchMinerals = async () => {
      const mineralData = await getAllMinerals();
      setMinerals(mineralData);
      setComments(mineralData);
    };
    fetchMinerals();
  }, []);

  // Handles updating posts
  const handleUpdate = async (mineral_id, comment_id, commentData) => {
    const updatedComment = await putComment(
      mineral_id,
      comment_id,
      commentData
    );
    setComments((prevState) =>
      prevState.map((comment) => {
        return comment.id === Number(comment_id) ? updatedComment : comment;
      })
    );
  };

  // Handles deleting posts

  return (
    <Switch>
      <Route exact path="/minerals">
        <Minerals minerals={minerals} />
      </Route>
      <Route exact path="/minerals/:id">
        <MineralDetail />
      </Route>
      <Route exact path="/minerals/:id/comments">
        <Comments
          // minerals={minerals}
          // comments={comments}
          setComments={setComments}
        />
      </Route>
      <Route exact path="/minerals/:id/comments/add-comment">
        <AddComment comments={comments} setComments={setComments} />
      </Route>
      <Route exact path="/minerals/:mineral_id/comments/:id">
        <EditComment handleUpdate={handleUpdate} />
      </Route>
    </Switch>
  );
};

export default MainContainer;
