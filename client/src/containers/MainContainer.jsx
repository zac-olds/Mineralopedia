// DEPENDENCIES
import {useState, useEffect} from "react";
import {Switch, Route, useHistory} from "react-router-dom";
import {getAllMinerals} from "../services/minerals";

// COMPONENTS
import Minerals from "../screens/Minerals";
import MineralDetail from "../screens/MineralDetail";
import Comment from "../screens/Comment";

const MainContainer = () => {
  const [minerals, setMinerals] = useState([]);
  // const history = useHistory();

  useEffect(() => {
    const fetchMinerals = async () => {
      const mineralData = await getAllMinerals();
      setMinerals(mineralData);
    };
    fetchMinerals();
  }, []);

  return (
    <Switch>
      <Route exact path="/minerals">
        <Minerals minerals={minerals} />
      </Route>
      <Route exact path="/minerals/:id">
        <MineralDetail />
      </Route>
      <Route>
        <Comment path="/minerals/:id/comments" />
      </Route>
    </Switch>
  );
};

export default MainContainer;
