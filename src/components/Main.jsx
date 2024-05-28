import { Box, Button, Container, Typography, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import DialogPickup from "./DialogPickup";
import DialogDropoff from "./DialogDropoff";
import DialogAddChild from "./DialogAddChild";
import customStyles from "../styles/main.styles";

const Main = () => {
  const [dialogDropoff, setDialogDropoff] = useState(false);
  const [dialogPickup, setDialogPickup] = useState(false);
  const [dialogAddChild, setDialogAddChild] = useState(false);
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((prevActive) => !prevActive);
  };

  const toggleDialogDropoff = () => {
    setDialogDropoff(!dialogDropoff);
  };

  const toggleDialogPickup = () => {
    setDialogPickup(!dialogPickup);
  };

  const toggleDialogAddChild = () => {
    setDialogAddChild(!dialogAddChild);
  };

  return (
    <Container
      maxWidth="fluid"
      component="main"
      sx={{
        textAlign: "center",
        backgroundColor: "#F8F8FF",
        marginTop: "0.5rem",
        minHeight: "100vh",
      }}
    >
      <Box>
        <Stack
          direction="column"
          justifyContent="center"
          spacing={5}
          alignItems={"center"}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Welcome to PicknDrop
          </Typography>

          <Container
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
            maxWidth="md"
          >
            <Stack
              direction="row"
              spacing={5}
              alignItems="center"
              justifyContent="center"
            >
              <Stack direction="column" spacing={2}>
                <Avatar
                  alt="Remy Sharp"
                  src="src\assets\avatar-boy-svgrepo-com.svg"
                  onClick={toggleActive}
                  sx={{
                    ...customStyles.avatar,
                    boxShadow: active
                      ? "0 0 10px 5px rgba(0, 0, 255, 0.5)"
                      : "none",
                  }}
                />

                <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Eren
                </Typography>
              </Stack>

              <Stack direction="column" spacing={2}>
                <Avatar
                  alt="Remy Sharp"
                  src="src\assets\avatar-boy1-svgrepo-com.svg"
                  onClick={toggleActive}
                  sx={{
                    ...customStyles.avatar,
                    boxShadow: active
                      ? "0 0 10px 5px rgba(0, 0, 255, 0.5)"
                      : "none",
                  }}
                />
                <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Kai
                </Typography>
              </Stack>

              <Stack direction="column" spacing={2}>
                <Avatar
                  alt="Remy Sharp"
                  src="src\assets\avatar-girl-svgrepo-com.svg"
                  onClick={toggleActive}
                  sx={{
                    ...customStyles.avatar,
                    boxShadow: active
                      ? "0 0 10px 5px rgba(0, 0, 255, 0.5)"
                      : "none",
                  }}
                />

                <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Dian
                </Typography>
              </Stack>

              <Button onClick={toggleDialogAddChild}>
                <AddCircleOutlineIcon sx={{ width: 50, height: 50 }} />
              </Button>

              {dialogAddChild && (
                <DialogAddChild
                  isOpen={dialogAddChild}
                  onClose={toggleDialogAddChild}
                />
              )}
            </Stack>
          </Container>

          <Stack direction="row" justifyContent="center" spacing={5}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#Ffcc00",
                color: "black",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
              onClick={toggleDialogDropoff}
            >
              DROP OFF
            </Button>
            {dialogDropoff && <DialogDropoff isOpen={toggleDialogDropoff} />}

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#Ffcc00",
                color: "black",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
              onClick={toggleDialogPickup}
            >
              PICK UP
            </Button>
            {dialogPickup && <DialogPickup isOpen={toggleDialogPickup} />}
          </Stack>

          <Box>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              24 / 5 / 2024
            </Typography>
          </Box>

          <Box>
            <Grid container spacing={2} justifyContent="center">
              <Grid
                item
                xs={12}
                lg={6}
                border={1}
                sx={{
                  padding: "0.5rem",
                  margin: "0.5rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "#F8F8FF",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <Box
                  sx={{
                    margin: "0.5rem",
                    padding: "0.5rem",
                  }}
                  width={500}
                >
                  <Typography variant="h4" gutterBottom>
                    At Home
                  </Typography>
                  <Stack direction="row" spacing={5} justifyContent="center">
                    <Avatar
                      alt="Remy Sharp"
                      src="src\assets\avatar-boy-svgrepo-com.svg"
                      sx={{ width: 100, height: 100 }}
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="src\assets\avatar-boy1-svgrepo-com.svg"
                      sx={{ width: 100, height: 100 }}
                    />
                  </Stack>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                lg={6}
                border={1}
                sx={{
                  padding: "0.5rem",
                  margin: "0.5rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "#F8F8FF",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <Box
                  sx={{
                    margin: "0.5rem",
                    padding: "0.5rem",
                  }}
                  width={500}
                >
                  <Typography variant="h4" gutterBottom>
                    At School
                  </Typography>
                  <Stack direction="row" spacing={5} justifyContent="center">
                    <Avatar
                      alt="Cindy Baker"
                      src="src\assets\avatar-girl-svgrepo-com.svg"
                      sx={{ width: 100, height: 100 }}
                    />
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default Main;
