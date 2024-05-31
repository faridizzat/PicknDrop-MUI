import { Container, Box, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import InputChildName from "../components/InputChildName";
// import Cards from "../components/Cards";
import DateToday from "../components/DateToday";
import ChildStatus from "../components/ChildStatus";
// import ActionButton from "../components/ActionButton";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AvatarChild from "../components/AvatarChild";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

const generateRandomHex = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

const generateRandomImage = () => {
  const imagesPath = [
    "src/assets/avatar-boy1-svgrepo-com.svg",
    "src/assets/avatar-boy2-svgrepo-com.svg",
    "src/assets/avatar-boy-svgrepo-com.svg",
    "src/assets/avatar-girl1-svgrepo-com.svg",
    "src/assets/avatar-girl-svgrepo-com.svg",
  ];

  return imagesPath[Math.floor(Math.random() * imagesPath.length)];
};

const HomePage = (props) => {
  const [childList, setChildList] = useState([]);
  const [pickedUpChild, setPickedUpChild] = useState([]);


  const handleAddNewChildName = (name) => {
    const newChild = {
      id: generateRandomHex(),
      name,
      imgPath: generateRandomImage(),
      isSelected: false,
    };

    const newChildList = [...childList, newChild];
    setChildList(newChildList);
  };

  const handleChecked = (event) => {
    const targetId = event.target.id;
    const targetChecked = event.target.checked;
    console.log(targetId, targetChecked);

    const selectedChildList = childList.map((child) => {
      if (child.id === targetId) {
        return {
          ...child,
          isSelected: targetChecked,
        };
      } else {
        return child;
      }
    });
    setChildList(selectedChildList);
  };

  const handleDelete = () => {
    const newChildList = childList.filter((child) => !child.isSelected);
    setChildList(newChildList);
  };

  const handleDropOff = () => {
    let droppedOffChild = []

    childList.map((child) => {
      if (child.isSelected)
      {
        droppedOffChild.push(child)
      }
      return child;
    });

    console.log("droppOff", droppedOffChild);
    return droppedOffChild;
  };

  const handlePickup = () => {

    let pickedUpChild = []

    childList.map((child) => {
      if (child.isSelected)
      {
        pickedUpChild.push(child)
      }
      return child;
    });

    console.log("pickedUp", pickedUpChild);
    return pickedUpChild;

  
  };
  

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        {/* Title
        <Box p={2} m={2} display={"flex"} justifyContent={"center"}>
        <Typography variant="h4">PicknDrop</Typography>
        </Box> */}

        {/* Input field */}
        <Box p={2} m={2} display={"flex"} justifyContent={"center"}>
          <InputChildName addNewChildName={handleAddNewChildName} />
        </Box>

        {/* Avatar */}
        <Box p={2} m={2} display={"flex"} justifyContent={"center"}>
          {childList.map((child) => {
            return (
              <AvatarChild
                key={child.id}
                id={child.id}
                name={child.name}
                imgPath={child.imgPath}
                checked={child.isSelected}
                toggleSelect={handleChecked}
              />
            );
          })}
        </Box>

        <Box p={2} m={2} display={"flex"} justifyContent={"center"}>
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
              onClick={handleDropOff}
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
              onClick={handlePickup}
            >
              Pick up
            </Button>
          </Box>
        </Box>

        <Box p={2} m={2} display={"flex"} justifyContent={"center"}>
          <DateToday />
        </Box>

        <Box p={2} m={2} display={"flex"} justifyContent={"center"}>
          <ChildStatus />
        </Box>
      </Container>
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
