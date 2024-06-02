import {
  Container,
  Paper,
  Typography,
  Box,
  Input,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Navbar from "../components/Navbar";

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="sm">
        <Paper
          sx={{
            margin: "5rem auto",
            padding: "2rem",
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ marginBottom: "3rem" }}>
            Profile Page
          </Typography>

          <Box
            m={1}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Typography variant="body1" gutterBottom>
              Name
            </Typography>
            <Box display={"flex"} flexDirection={"row"}>
              <Input type="text" />
              <Button>
                <EditIcon />
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
      ;
    </>
  );
};

export default ProfilePage;
