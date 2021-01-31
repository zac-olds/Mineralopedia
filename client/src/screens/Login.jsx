// DEPENDENCIES
import {useState} from "react";
import {Link} from "react-router-dom";

// MATERIAL UI IMPORTS
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AssignmentIcon from "@material-ui/icons/Assignment";

// STYLES
// import "Login.css";

const Login = (props) => {
  // Set state for capture of form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Pull username and password out of formData
  const {username, password} = formData;

  // Pull handleLogin from props
  const {handleLogin} = props;

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
      <h2>Login</h2>
      <TextField
        type="text"
        name="username"
        label="Username:"
        variant="outlined"
        size="small"
        value={username}
        onChange={handleChange}
        autoComplete="username"
      />
      <TextField
        type="password"
        name="password"
        label="Password:"
        variant="outlined"
        size="small"
        value={password}
        onChange={handleChange}
        autoComplete="password"
      />
      <Link to="/register">
        <Button
          variant="contained"
          color="primary"
          // className={classes.button}
          startIcon={<AssignmentIcon />}
        >
          Register
        </Button>
      </Link>
      <Button
        variant="contained"
        type="submit"
        color="primary"
        // className={classes.button}
        startIcon={<CheckCircleIcon />}
      >
        Login
      </Button>
    </form>
  );
};

export default Login;
