
// DEPENDENCIES
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// COMPONENTS
import Layout from './layouts/Layout';
import Login from './screens/Login';
import Register from './screens/Register';
import MainContainer from './containers/MainContainer';

// STYLES
import './App.css';


function App() {
  // Define current user to pass down as props
  const [currentUser, setCurrentUser] = useState(null);

  // Define history using useHistory
  const history = useHistory();

  // Verify returning user
  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, [])

  // Login user
  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  }

  // Register user
  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/')
  }

  // Logout user
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }

  // // Theme colors
  // const theme = createMuiTheme({
  //   palette: {
  //     primary: {
  //       main: ,
  //     },
  //     secondary: {
  //       main: '#c0c0c0',
  //     },
  //   },
  // });

  return (
    // <ThemeProvider theme={theme}>
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path="/login">
            <Login
              handleLogin={handleLogin}
            />
          </Route>
          <Route path='/register'>
            <Register
              handleRegister={handleRegister}
            />
          </Route>
          <Route path='/'>
            <MainContainer currentUser={currentUser} />
          </Route>
        </Switch>
      </Layout>
    // </ThemeProvider>
  );
}

export default App;
