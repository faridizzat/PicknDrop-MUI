import { Box, Button } from "@mui/material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import PropTypes from "prop-types";

const ActionButton = (props) => {
  const childList = props.childList;

  const isChildSelected = childList.some((child) => child.isSelected);

  return (
    <Box
      display={"flex"}
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      flexWrap={"wrap"}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#Ffcc00",
          color: "black",
          fontSize: "1.5rem",
          fontWeight: "bold",
          margin: "2rem",
          width: "15rem",
          height: "5rem",
          borderRadius: "2rem",
        }}
        onClick={props.handleDropOff}
        disabled={!isChildSelected}
      >
        Drop Off
      </Button>

      <Button>
        <DeleteForeverRoundedIcon
          fontSize="large"
          className="deleteIcon"
          sx={{
            position: "absolute",
            color: "red",
          }}
          onClick={props.handleDelete}
          disabled={!isChildSelected}
        />
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#Ffcc00",
          color: "black",
          fontSize: "1.5rem",
          fontWeight: "bold",
          margin: "2rem",
          width: "15rem",
          height: "5rem",
          borderRadius: "2rem",
        }}
        onClick={props.handlePickup}
        disabled={!isChildSelected}
      >
        Pick up
      </Button>
    </Box>
  );
};

ActionButton.propTypes = {
  handleDropOff: PropTypes.func,
  handleDelete: PropTypes.func,
  handlePickup: PropTypes.func,
  childList: PropTypes.array,
};

export default ActionButton;
