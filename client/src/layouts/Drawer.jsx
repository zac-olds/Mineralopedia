import React from "react";
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import "../styles/Drawer.css";

// LIST COMPONENTS
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// ICONS
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PhotoIcon from "@material-ui/icons/Photo";
import SearchIcon from "@material-ui/icons/Search";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import StarIcon from "@material-ui/icons/Star";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles({
  list: {
    width: "200px",
    // backgroundColor: "#180c2b",
  },
  // fullList: {
  //   width: "300px",
  //   backgroundColor: "#180c2b",
  // },
  // drawer: {
  //   backgroundColor: "green",
  // },
});

export default function MenuDrawer(props) {
  const {currentUser, handleLogout} = props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const anchor = "left";
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        // [classes.fullList]: anchor === "left" || anchor === "right",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button component={Link} to="/login">
          <ListItemIcon>
            <AccountCircleIcon className="drawer-icon" />
          </ListItemIcon>
          {currentUser ? (
            <React.Fragment>
              <p className="user-name">{`Hello, ${currentUser.username}`}</p>
            </React.Fragment>
          ) : (
            <ListItemText primary="Login" />
          )}
        </ListItem>
        <ListItem button component={Link} to="/minerals">
          <ListItemIcon>
            <PhotoIcon className="drawer-icon" />
          </ListItemIcon>
          <ListItemText primary="Gallery" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon className="drawer-icon" />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocationSearchingIcon className="drawer-icon" />
          </ListItemIcon>
          <ListItemText primary="Mineral ID" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon className="drawer-icon" />
          </ListItemIcon>
          <ListItemText primary="Favorites" />
        </ListItem>
        {currentUser ? (
          <ListItem
            button
            onClick={handleLogout}
            variant="contained"
            type="submit"
            color="primary"
          >
            <ListItemIcon>
              <ExitToAppIcon className="drawer-icon" />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
        ) : null}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer("left", true)}>
          {<MenuIcon className="menu-icon" />}
        </Button>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          id="drawer"
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
