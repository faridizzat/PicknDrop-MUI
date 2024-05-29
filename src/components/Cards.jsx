import { Avatar, Box, Typography } from "@mui/material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

const Cards = () => {
  const childs = [
    {
      id: 1,
      name: "Eren",
      imgPath: "src/assets/avatar-boy1-svgrepo-com.svg",
    },
    {
      id: 2,
      name: "Mikasa",
      imgPath: "src/assets/avatar-girl-svgrepo-com.svg",
    },
    {
      id: 3,
      name: "Armin",
      imgPath: "src/assets/avatar-boy-svgrepo-com.svg",
    },
    {
      id: 4,
      name: "Reiner",
      imgPath: "src/assets/avatar-boy2-svgrepo-com.svg",
    },
    {
      id: 5,
      name: "Annie",
      imgPath: "src/assets/avatar-girl1-svgrepo-com.svg",
    },
  ];

  return (
    <Box
      display={"flex"}
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
    >
      {childs.map((child) => (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          m={2}
          key={child.id}
          position="relative"
        >
          <Avatar
            alt={child.name}
            src={child.imgPath}
            sx={{ width: 100, height: 100 }}
            // position="relative"
          />
          <DeleteForeverRoundedIcon
            fontSize="large"
            sx={{
              position: "absolute",
              top: 35,
              right: 35,
              cursor: "pointer",
              color: "red",
              "&:hover": {
                color: "black",
              },
              zIndex: 1,
            }}
          />
          <Typography variant="h5" p={2}>
            {child.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Cards;
