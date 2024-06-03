import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Navbar from "../components/Navbar";
import { useState } from "react";

const ProfilePage = () => {
  const [name, setName] = useState("Farid");
  const [email, setEmail] = useState("farid@me.com");
  const [password, setPassword] = useState("123456");
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const handleEdit = () => {
    setEditMode(!editMode);
    setIsReadOnly(!isReadOnly);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log({ name, email, password });

    setIsReadOnly(!isReadOnly);
    setEditMode(!editMode);
  };

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

          <Box component="form" onSubmit={handleSubmit}>
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
                <TextField
                  id="name"
                  name="name"
                  defaultValue={name}
                  InputProps={{
                    readOnly: isReadOnly,
                  }}
                  variant="standard"
                />

                <Button>
                  <EditIcon
                    onClick={handleEdit}
                    sx={{
                      display: editMode ? "none" : "block",
                    }}
                  />
                </Button>
              </Box>
            </Box>

            <Box
              m={1}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Typography variant="body1" gutterBottom>
                Email
              </Typography>
              <Box display={"flex"} flexDirection={"row"}>
                <TextField
                  id="email"
                  name="email"
                  defaultValue={email}
                  InputProps={{
                    readOnly: isReadOnly,
                  }}
                  variant="standard"
                />
                <Button>
                  <EditIcon
                    onClick={handleEdit}
                    sx={{
                      display: editMode ? "none" : "block",
                    }}
                  />
                </Button>
              </Box>
            </Box>

            <Box
              m={1}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Typography variant="body1" gutterBottom>
                Password
              </Typography>
              <Box display={"flex"} flexDirection={"row"}>
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  defaultValue={password}
                  InputProps={{
                    readOnly: isReadOnly,
                  }}
                  variant="standard"
                />
                <Button>
                  <EditIcon
                    onClick={handleEdit}
                    sx={{
                      display: editMode ? "none" : "block",
                    }}
                  />
                </Button>
              </Box>
            </Box>
            <Button
              variant="contained"
              sx={{ margin: "0.3rem 0" }}
              type="submit"
            >
              Save
            </Button>
          </Box>
        </Paper>
      </Container>
      ;
    </>
  );
};

export default ProfilePage;
