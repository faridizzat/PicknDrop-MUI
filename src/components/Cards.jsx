import { Avatar, Box, Typography } from "@mui/material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import PropTypes from "prop-types";

const Cards = (props) => {
  const childList = props.childList;

  return (
    <Box
      display={"flex"}
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
    >
      {childList.map((child) => (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          m={2}
          key={child.id}
          position="relative"
          sx={{
            "&:hover .deleteIcon": {
              display: "inline-block",
            },
          }}
        >
          <Avatar
            alt={child.name}
            src={child.imgPath}
            sx={{ width: 100, height: 100 }}
          />
          <DeleteForeverRoundedIcon
            fontSize="large"
            className="deleteIcon"
            sx={{
              display: "none",
              position: "absolute",
              color: "red",
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

Cards.propTypes = {
  childList: PropTypes.array,
};

export default Cards;
