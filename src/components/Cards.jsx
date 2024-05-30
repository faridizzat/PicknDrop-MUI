import { Avatar, Box, Typography, Checkbox } from "@mui/material";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
const Cards = (props) => {
  const childList = props.childList;
  const [updatedChildList, setUpdatedChildList] = useState(childList);

  useEffect(() => {
    setUpdatedChildList(childList);
  }, [childList]);

  const handleChecked = (event) => {
    const targetId = event.target.id;
    const targetChecked = event.target.checked;

    console.log("targetId", targetId, "targetChecked", targetChecked);

    const newChildList = updatedChildList.map((child) => {
      if (child.id === targetId) {
        return {
          ...child,
          isSelected: targetChecked,
        };
      } else {
        return child;
      }
    });
    setUpdatedChildList(newChildList);
  };
  const selectedChildren = updatedChildList.filter((child) => child.isSelected);

  props.SelectedChild({ selectedChildren });

  return (
    <Box
      display={"flex"}
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
    >
      {updatedChildList.map((child) => (
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
              name={child.name}
              sx={{ display: "none" }}
              // checked={child.isSelected}
              onChange={handleChecked}
            />

            <Avatar
              alt={child.name}
              src={child.imgPath}
              sx={{
                width: 100,
                height: 100,
                border: child.isSelected ? "2px solid black" : "none",
              }}
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
  SelectedChild: PropTypes.func,
};

export default Cards;
