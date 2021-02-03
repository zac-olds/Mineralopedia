// DEPENDENCIES
import {useState} from "react";
import {Link} from "react-router-dom";

// MATERIAL UI IMPORTS
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AssignmentIcon from "@material-ui/icons/Assignment";

// STYLES
import "../styles/Login.css";

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
    <div className="login-form">
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
        }}
      >
        <TextField
          type="text"
          name="username"
          label="Username:"
          variant="standard"
          size="small"
          id="login-input"
          value={username}
          onChange={handleChange}
          autoComplete="username"
        />
        <TextField
          type="password"
          name="password"
          label="Password:"
          variant="standard"
          size="small"
          id="login-input"
          value={password}
          onChange={handleChange}
          autoComplete="password"
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          id="login-button"
          startIcon={<CheckCircleIcon />}
        >
          Login
        </Button>
        <Link to="/register">
          <Button
            variant="contained"
            color="primary"
            id="login-button"
            startIcon={<AssignmentIcon />}
          >
            Register
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
