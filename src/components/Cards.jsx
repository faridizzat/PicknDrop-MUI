import { Avatar, Box, FormControl, Typography, Checkbox } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const Cards = (props) => {
  const childList = props.childList;

  // const [newChildList, setNewChildList] = useState(childList);

  const handleSelectChild = (event) => {
    console.log(event);
  };

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
        >

            <label htmlFor={child.id}>
              <Checkbox
                id={child.id}
                sx={{ display: "none" }}
                onChange={handleSelectChild}
                checked={props.isSelected}
              />

              <Avatar
                alt={child.name}
                src={child.imgPath}
                sx={{
                  width: 100,
                  height: 100,
                  border: props.isSelected ? "2px solid black" : "none",
                }}
                onClick={props.handleChecked}
              />
            </label>

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
  handleChecked: PropTypes.func,
  isSelected: PropTypes.bool,
};

export default Cards;
