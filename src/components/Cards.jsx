import { Avatar, Box, Typography, Checkbox } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const Cards = (props) => {
  const childList = props.childList;



  const handleChecked = (event) => {
    const targetId = event.target.id;
    const targetChecked = event.target.checked;

    console.log(targetId, targetChecked);

  }

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
              name={child.name}
              imgPath={child.imgPath}
              sx={{ display: "none" }}
              checked={isSelected}
              onChange={handleChecked}
            />

            <Avatar
              alt={child.name}
              src={child.imgPath}
              sx={{
                width: 100,
                height: 100,
                // border: props.isSelected ? "2px solid black" : "none",
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
};

export default Cards;
