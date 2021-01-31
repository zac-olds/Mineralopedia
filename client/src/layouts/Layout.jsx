import {Link} from "react-router-dom";
import {useState} from "react";

// MATERIAL UI IMPORTS
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import TemporaryDrawer from "./testing123";

const Layout = (props) => {
  // Set state for MUI Drawer
  const [openDrawer, setOpenDrawer] = useState(false);

  const {currentUser, handleLogout} = props;
  return (
    <div>
      <header>
        <h1>Mineralopedia</h1>
        <TemporaryDrawer
          currentUser={currentUser}
          handleLogout={handleLogout}
        />
        {/* {currentUser ? (
          <>
            <p>{currentUser.username}</p>
            <Button
              onClick={handleLogout}
              variant="contained"
              type="submit"
              color="primary"
              // className={classes.button}
              startIcon={<ExitToAppIcon />}
            >
              Logout
            </Button>
          </>
        ) : (
          <Link to="/login">Login/Register</Link>
        )} */}
      </header>
      {currentUser && (
        <>
          <Link to="/gallery"></Link>
          <Link to="/search"></Link>
          <Link to="/mineral-id"></Link>
          <Link to="/favorites"></Link>
        </>
      )}
      {props.children}
    </div>
  );
};

export default Layout;
