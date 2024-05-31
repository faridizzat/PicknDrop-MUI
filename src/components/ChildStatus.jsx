import { Box, Typography, Avatar } from "@mui/material";

const ChildStatus = () => {
  const childAtHome = [];

  const childInSchool = [];
  return (
    <Box
      display="flex"
      flexDirection={"row"}
      flexWrap={"wrap"}
      justifyContent="center"
      alignItems="center"
    >
      {/* Box 1 */}
      <Box
        width={"30rem"}
        height={"15rem"}
        m={1}
        border={1}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
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
        <Typography variant="h4">At Home</Typography>

        <Box
          display={"flex"}
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
        >
          {childAtHome.map((child) => (
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
              />

              <Typography variant="h5" p={2}>
                {child.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/*Box 2 */}
      <Box
        width={"30rem"}
        height={"15rem"}
        m={1}
        border={1}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
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
        <Typography variant="h4">In School</Typography>

        <Box
          display={"flex"}
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
        >
          {childInSchool.map((child) => (
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
              />

              <Typography variant="h5" p={2}>
                {child.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ChildStatus;
