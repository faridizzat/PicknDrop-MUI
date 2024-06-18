import Navbar from "../components/Navbar";
import {
  Box,
  Container,
  Typography,
  TextField,
  InputLabel,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth.js";
import useAuth from "../hooks/useAuth.js";

const LoginPage = () => {
  const navigate = useNavigate();

  const { setAuth } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formContent = event.target.elements;

    const email = formContent.email.value;
    const password = formContent.password.value;

    const data = await loginUser({ email, password });

    const token = data.token;

    //if no token, terminate session
    if (!token) {
      alert("Login Failed");
      return;
    }

    //if token true, set token in local storage and navigate to home page
    window.localStorage.setItem("token", token);

    setAuth({ email, password, token });

    navigate("/");
    event.target.reset();
  };

  return (
    <>
      <Navbar />

      <Container maxWidth="lg">
        <Box
          display={"flex"}
          justifyContent="flex-end"
          sx={{
            margin: { xs: "1rem auto", md: "3rem auto" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box flex={1} m={1}>
            <img
              src="https://images.unsplash.com/photo-1581998392741-67879e0ef04a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="register"
              width={"100%"}
            />
          </Box>
          <Box flex={1} display={"flex"} flexDirection={"column"} m={1}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              m={1}
            >
              <Typography variant="h4">Login</Typography>
              <Typography variant="body1">
                Enter your details to login to your account
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignContent={"flex-start"}
            >
              <Box
                component={"form"}
                display={"flex"}
                flexDirection={"column"}
                p={2}
                onSubmit={handleSubmit}
              >
                <InputLabel htmlFor="email"></InputLabel>
                <TextField
                  id="email"
                  name="email"
                  label="Email Address"
                  variant="outlined"
                  sx={{ margin: "0.3rem 0" }}
                />

                <InputLabel htmlFor="password"></InputLabel>
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  sx={{ margin: "0.3rem 0" }}
                />

                <Button
                  variant="contained"
                  sx={{ margin: "0.3rem 0" }}
                  type="submit"
                >
                  Login
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;
