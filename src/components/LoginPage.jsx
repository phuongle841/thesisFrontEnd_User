import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { Link as RouterLink } from "react-router-dom";
import NavBar from "./NavBar";
import { Collapse, Container } from "@mui/material";
import NavFooter from "./NavFooter";
import NavBarShopping from "./NavBar_Shopping";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { setCookie } from "../utils/Cookies";
import { UserContext } from "../context/userContext";
export default function LoginPage() {
  // use history to ref to prev page
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [authError, setAuthError] = React.useState("");
  const { setUserId } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);

    event.preventDefault();

    (async () => {
      const rawResponse = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: data.get("email"),
          userPassword: data.get("password"),
        }),
      });
      const content = await rawResponse.json();
      if (content == "undefined") {
        setAuthError("cannot authenticate users");
      } else {
        // set token into local storage
        const { token, userId } = content;
        const url = `/profile/${userId.userId}`;
        setCookie("Authorization", "Bearer " + token);
        setUserId(userId.userId);
        navigate("/");
      }
    })();
  };

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
      >
        <Box>
          <NavBar></NavBar>
          <NavBarShopping></NavBarShopping>
        </Box>
        <Container>
          <Box alignContent={"center"}>
            <Card
              variant="outlined"
              sx={{
                maxWidth: "40%",
                marginLeft: "30%",
                marginRight: "30%",
                padding: "10px",
              }}
            >
              <Typography
                component="h1"
                variant="h4"
                sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
              >
                Log in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  gap: 2,
                }}
              >
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <TextField
                    error={emailError}
                    helperText={emailErrorMessage}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    autoFocus
                    required
                    fullWidth
                    variant="outlined"
                    color={emailError ? "error" : "primary"}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <TextField
                    error={passwordError}
                    helperText={passwordErrorMessage}
                    name="password"
                    placeholder="••••••"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    autoFocus
                    required
                    fullWidth
                    variant="outlined"
                    color={passwordError ? "error" : "primary"}
                  />
                </FormControl>
                <Collapse>{authError && <p>{authError}</p>}</Collapse>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={validateInputs}
                >
                  Log in
                </Button>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography sx={{ textAlign: "center" }}>
                  Don&apos;t have an account?{" "}
                  <Link component={RouterLink} to={"/signup"}>
                    Sign up
                  </Link>
                </Typography>
              </Box>
            </Card>
          </Box>
        </Container>
        <NavFooter></NavFooter>
      </Box>
    </>
  );
}
