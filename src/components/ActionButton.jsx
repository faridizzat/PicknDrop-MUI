import { Box, Button } from "@mui/material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ActionButton = (props) => {
  const selectedChildren = props.highlightedChildren;
  
  const [highlightedChildrenArray, setHighlightedChildrenArray] = useState(selectedChildren);
  useEffect(() => {
    setHighlightedChildrenArray(selectedChildren);
  }, [selectedChildren]);
  
  console.log("from AB>>", highlightedChildrenArray);
  



  const handleDelete = (event) => {
    console.log(event);
  };

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
          onClick={handleDelete}
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
      >
        Pick up
      </Button>
    </Box>
  );
};

ActionButton.propTypes = {
  highlightedChildren: PropTypes.array,
  
};

export default ActionButton;
