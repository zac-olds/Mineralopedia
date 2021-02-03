// DEPENDENCIES
import {useState} from "react";

// MATERIAL UI IMPORTS
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

// STYLES
import "../styles/Register.css";

const Register = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const {username, email, password} = formData;
  const {handleRegister} = props;

  // Handle change in input
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle sumbitting form
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(formData);
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="username"
          label="Username:"
          variant="standard"
          size="small"
          id="register-input"
          value={username}
          onChange={handleChange}
        />
        <TextField
          type="text"
          name="email"
          label="Email:"
          variant="standard"
          size="small"
          id="register-input"
          value={email}
          onChange={handleChange}
        />
        <TextField
          type="password"
          name="password"
          label="Password:"
          variant="standard"
          size="small"
          id="register-input"
          value={password}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          id="register-button"
          startIcon={<CheckCircleIcon />}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Register;
