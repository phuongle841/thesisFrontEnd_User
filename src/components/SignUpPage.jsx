import { useContext, useState } from "react";
import DirectoryLink from "./DirectoryLink";
import NavFooter from "./NavFooter";
import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import { Box, colors } from "@mui/material";
import { setCookie } from "../utils/Cookies";
import { UserContext } from "../context/userContext";
import AuthorizationContext from "../context/authorizationContext";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState({ error: "", success: "" });
  const { setUserId } = useContext(UserContext);
  const { setAuthorization } = useContext(AuthorizationContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ error: "", success: "" });

    try {
      const response = await fetch("http://localhost:3000/login/signup", {
        mode: "cors",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Registration failed");
      }

      setStatus({ success: "Account created successfully!", error: "" });

      const { token, UserId } = result;
      setCookie("Authorization", "Bearer " + token);
      setAuthorization("Bearer " + token);
      // set Authorization
      setUserId(UserId);
      navigate("/");
    } catch (err) {
      setStatus({ error: err.message, success: "" });
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      minHeight={"100vh"}
      justifyContent={"space-between"}
    >
      <div>
        <NavBar></NavBar>
        <NavBarShopping></NavBarShopping>
      </div>
      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2>Create an Account</h2>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              style={{ ...styles.input, marginBottom: 0 }}
            />
            <button
              type="button"
              onClick={togglePassword}
              style={styles.toggleButton}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button type="submit" style={styles.submit}>
            Sign Up
          </button>

          {status.error && <p style={styles.error}>{status.error}</p>}
          {status.success && <p style={styles.success}>{status.success}</p>}
        </form>
      </div>
      <NavFooter></NavFooter>
    </Box>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
  form: {
    background: "white",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "300px",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  passwordContainer: {
    position: "relative",
    marginBottom: "1rem",
  },
  toggleButton: {
    position: "absolute",
    right: "10px",
    top: "7px",
    background: "transparent",
    border: "none",
    color: "#007bff",
    cursor: "pointer",
  },
  submit: {
    background: "black",
    color: "white",
    padding: "10px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "1rem",
  },
  success: {
    color: "green",
    marginTop: "1rem",
  },
};
