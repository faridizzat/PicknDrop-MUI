import { Container, Box, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import InputChildName from "../components/InputChildName";
// import Cards from "../components/Cards";
import DateToday from "../components/DateToday";
import ChildStatus from "../components/ChildStatus";
// import ActionButton from "../components/ActionButton";
import { useState } from "react";
import AvatarChild from "../components/AvatarChild";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import DialogDropoff from "../components/DialogDropoff";
import DialogPickup from "../components/DialogPickup";

const generateRandomHex = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

const generateRandomImage = () => {
  const imagesPath = [
    "src/assets/cat-animals-svgrepo-com.svg",
    "src/assets/duck-animals-svgrepo-com.svg",
    "src/assets/elephant-animals-svgrepo-com.svg",
    "src/assets/fish-animals-svgrepo-com.svg",
    "src/assets/lion-animals-svgrepo-com.svg",
    "src/assets/macaw-animals-svgrepo-com.svg",
    "src/assets/owl-animals-svgrepo-com.svg",
    "src/assets/raccoon-animals-svgrepo-com.svg",
    "src/assets/rhinoceros-animals-svgrepo-com.svg",
    "src/assets/sheep-animals-svgrepo-com.svg",
    "src/assets/tortoise-animals-svgrepo-com.svg",
    "src/assets/toucan-animals-svgrepo-com.svg",
  ];

  return imagesPath[Math.floor(Math.random() * imagesPath.length)];
};

const HomePage = () => {
  const [childList, setChildList] = useState([]);
  const [pickedUpChildName, setPickedUpChildName] = useState([]);
  const [droppedOffChildName, setDroppedOffChildName] = useState([]);
  const [pickedUpChildList, setPickedUpChildList] = useState([]);
  const [droppedOffChildList, setDroppedOffChildList] = useState([]);

  const [dialogDropoff, setDialogDropoff] = useState(false);
  const toggleDialogDropoff = () => {
    setDialogDropoff(!dialogDropoff);
  };

  const [dialogPickup, setDialogPickup] = useState(false);
  const toggleDialogPickup = () => {
    setDialogPickup(!dialogPickup);
  };

  const handleAddNewChildName = (name) => {
    const newChild = {
      id: generateRandomHex(),
      name,
      imgPath: generateRandomImage(),
      isAtHome: true,
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

  console.log("childList", childList);
  const handleDelete = () => {
    const newChildList = childList.filter((child) => !child.isSelected);
    setChildList(newChildList);
  };

  const handlePickup = () => {
    const newChildList = childList.filter((child) => child.isSelected);
    setDroppedOffChildList(newChildList);
    const newChildListName = newChildList.map((child) => child.name);
    const formattedChildListName = newChildListName.join(", ");
    setPickedUpChildName(formattedChildListName);
    toggleDialogPickup();
  };

  const handleDropOff = () => {
    const newChildList = childList.filter((child) => child.isSelected);
    setPickedUpChildList(newChildList);
    const newChildListName = newChildList.map((child) => child.name);
    const formattedChildListName = newChildListName.join(", ");
    setDroppedOffChildName(formattedChildListName);
    toggleDialogDropoff();
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
            {dialogDropoff && (
              <DialogDropoff
                isOpen={toggleDialogDropoff}
                name={droppedOffChildName}
              />
            )}

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
            {dialogPickup && (
              <DialogPickup
                isOpen={toggleDialogPickup}
                name={pickedUpChildName}
              />
            )}
          </Box>
        </Box>

        <Box p={2} m={2} display={"flex"} justifyContent={"center"}>
          <DateToday />
        </Box>

        <Box p={2} m={2} display={"flex"} justifyContent={"center"}>
          <ChildStatus childList={childList} />
        </Box>
      </Container>
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
