import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  // const isAuthenticated = false;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#Ffcc00" }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Button>
                <RouterLink
                  style={{
                    fontSize: "1.5rem",
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: "Roboto, sans-serif",
                  }}
                  to="/"
                >
                  PicknDrop
                </RouterLink>
              </Button>
            </Box>
            <Button>
              <RouterLink
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "1rem",
                  margin: "0.25rem 0.5rem",
                }}
                to="/"
              >
                PROFILE
              </RouterLink>
            </Button>
            <Button>
              <RouterLink
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "1rem",
                  margin: "0.25rem 0.5rem",
                }}
                to="/login"
              >
                LOGOUT
              </RouterLink>
            </Button>
            <Button>
              <RouterLink
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "1rem",
                  margin: "0.25rem 0.5rem",
                  // display: isAuthenticated ? "block" : "none",
                }}
                to="/register"
              >
                Register
              </RouterLink>
            </Button>

            <Button>
              <RouterLink
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "1rem",
                  margin: "0.25rem 0.5rem",
                  // display: isAuthenticated ? "block" : "none",
                }}
                to="/login"
              >
                LOGIN
              </RouterLink>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
