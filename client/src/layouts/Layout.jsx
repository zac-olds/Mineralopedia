import MenuDrawer from "./Drawer";

const Layout = (props) => {
  const {currentUser, handleLogout} = props;
  return (
    <div>
      <header>
        <h1>Mineralopedia</h1>
        <MenuDrawer currentUser={currentUser} handleLogout={handleLogout} />
      </header>
      {props.children}
    </div>
  );
};

export default Layout;
