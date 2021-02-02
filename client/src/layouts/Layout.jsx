import MenuDrawer from "./Drawer";
import "../styles/Layout.css";

const Layout = (props) => {
  const {currentUser, handleLogout} = props;
  return (
    <div className="layout-div">
      <header className="nav-header">
        <h1 className="main-title">Mineralopedia</h1>
        <MenuDrawer currentUser={currentUser} handleLogout={handleLogout} />
      </header>
      {props.children}
    </div>
  );
};

export default Layout;
