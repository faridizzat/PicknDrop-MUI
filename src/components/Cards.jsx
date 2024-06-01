import { Avatar, Box, Typography, Checkbox, Button } from "@mui/material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

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
  // const selectedChildren = updatedChildList.filter((child) => child.isSelected);

  const handleDelete = () => {
    //if isSelected is true, remove the child and update the state
    const newChildList = updatedChildList.filter((child) => !child.isSelected);
    setUpdatedChildList(newChildList);
  };

  return (
    <form onSubmit={handleDelete}>
      <Box display="flex" flexDirection="column">
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
                    boxShadow: child.isSelected
                      ? "0 0 10px rgba(0, 0, 255, 0.5)" // Add a blue glow if selected
                      : "none", // No glow if not selected
                    transition: "box-shadow 0.3s ease-in-out", // Add transition for smooth effect
                  }}
                />
              </label>

              <Typography variant="h5" p={2}>
                {child.name}
              </Typography>
            </Box>
          ))}
        </Box>
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
      </Box>
    </form>
  );
};

Cards.propTypes = {
  childList: PropTypes.array,
};

export default Cards;
