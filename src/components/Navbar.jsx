import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { isAuthenticated } from "../utils/isAuthenticated";

export default function Navbar() {
  const isAuth = isAuthenticated();

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
  };

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
                  to={isAuth ? "/" : "/login"}
                >
                  PicknDrop
                </RouterLink>
              </Button>
            </Box>

            <Button sx={{ visibility: isAuth ? "visible" : "hidden" }}>
              <RouterLink
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "1rem",
                  margin: "0.25rem 0.5rem",
                }}
                to="/attendance"
              >
                Attendance
              </RouterLink>
            </Button>

            <Button sx={{ visibility: isAuth ? "visible" : "hidden" }}>
              <RouterLink
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "1rem",
                  margin: "0.25rem 0.5rem",
                }}
                to="/profile"
              >
                PROFILE
              </RouterLink>
            </Button>
            <Button
              onClick={handleLogout}
              sx={{ visibility: isAuth ? "visible" : "hidden" }}
            >
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
            <Button sx={{ visibility: isAuth ? "hidden" : "visible" }}>
              <RouterLink
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "1rem",
                  margin: "0.25rem 0.5rem",
                }}
                to="/register"
              >
                Register
              </RouterLink>
            </Button>

            <Button sx={{ visibility: isAuth ? "hidden" : "visible" }}>
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
                LOGIN
              </RouterLink>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
