import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Container } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#Ffcc00" }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                to="/"
                color={"inherit"}
                underline="none"
                variant="h5"
                sx={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              >
                PicknDrop
              </Link>
            </Typography>
            <Button
              color="inherit"
              sx={{
                fontSize: "1rem",
                margin: "0.25rem 0.5rem",
              }}
            >
              Profile
            </Button>
            <Button
              color="inherit"
              sx={{
                fontSize: "1rem",
                margin: "0.25rem 0.5rem",
              }}
            >
              Logout
            </Button>
            <Button
              color="inherit"
              sx={{
                fontSize: "1rem",
                margin: "0.25rem 0.5rem",
              }}
            >
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
