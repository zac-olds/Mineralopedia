// DEPENDENCIES
import {useState} from "react";

// MATERIAL UI IMPORTS
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

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
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <TextField
        type="text"
        name="username"
        label="Username:"
        variant="outlined"
        size="small"
        value={username}
        onChange={handleChange}
      />
      <TextField
        type="text"
        name="email"
        label="Email:"
        variant="outlined"
        size="small"
        value={email}
        onChange={handleChange}
      />
      <TextField
        type="password"
        name="password"
        label="Password:"
        variant="outlined"
        size="small"
        value={password}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        type="submit"
        color="primary"
        startIcon={<CheckCircleIcon />}
      >
        Submit
      </Button>
    </form>
  );
};

export default Register;
