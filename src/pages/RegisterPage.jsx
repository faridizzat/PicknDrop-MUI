import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  TextField,
  InputLabel,
  Button,
} from "@mui/material";
import { registerUser } from "../api/auth.js";

const RegisterPage = () => {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formContent = event.target.elements;

    const name = formContent.name.value;
    const email = formContent.email.value;
    const password = formContent.password.value;

    console.log({ name, email, password });

    // Call API untuk register sini
    const data = await registerUser({
      name,
      email,
      password,
    });

    const token = data.token;

    //save token
    if (token) window.localStorage.setItem("token", token);

    event.target.reset();

    if (token) navigate("/");
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
              src="https://images.unsplash.com/photo-1560328055-e938bb2ed50a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              <Typography variant="h4">Register</Typography>
              <Typography variant="body1">
                Enter your details to create an account
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignContent={"flex-start"}
              minWidth={"80%"}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                p={2}
                component={"form"}
                onSubmit={handleSubmit}
              >
                <InputLabel htmlFor="name"></InputLabel>
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  variant="outlined"
                  sx={{ margin: "0.3rem 0" }}
                />

                <InputLabel htmlFor="name"></InputLabel>
                <TextField
                  id="email"
                  name="email"
                  label="Email Address"
                  variant="outlined"
                  sx={{ margin: "0.3rem 0" }}
                />

                <InputLabel htmlFor="name"></InputLabel>

                <TextField
                  id="password"
                  name="password"
                  label="Passwod"
                  variant="outlined"
                  type="password"
                  sx={{ margin: "0.3rem 0" }}
                />

                <Button
                  variant="contained"
                  sx={{ margin: "0.3rem 0" }}
                  type="submit"
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default RegisterPage;
