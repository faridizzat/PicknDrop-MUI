import { Container, Box } from "@mui/material";
import Navbar from "../components/Navbar";
import InputChildName from "../components/InputChildName";
import DateToday from "../components/DateToday";
import ChildStatus from "../components/ChildStatus";
import ActionButton from "../components/ActionButton";
import { useState } from "react";
import AvatarChild from "../components/AvatarChild";
import DialogDropoff from "../components/DialogDropoff";
import DialogPickup from "../components/DialogPickup";
import generateRandomImage from "../utils/generateRandomImage";
import generateRandomHex from "../utils/generateRandomHex";

const HomePage = () => {
  const [childList, setChildList] = useState([]);
  const [pickedUpChildName, setPickedUpChildName] = useState([]);
  const [droppedOffChildName, setDroppedOffChildName] = useState([]);
  const [dialogDropoff, setDialogDropoff] = useState(false);
  const [dialogPickup, setDialogPickup] = useState(false);
  const toggleDialogDropoff = () => {
    setDialogDropoff(!dialogDropoff);
  };

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

  const handlePickup = () => {
    const newChildList = childList.map((child) => {
      if (!child.isSelected) {
        return child; // do nothing
      }

      return {
        ...child,
        isSelected: false,
        isAtHome: true,
      };
    });
    setChildList(newChildList);

    const newChildListName = newChildList.map((child) => child.name);
    const formattedChildListName = newChildListName.join(", ");
    setPickedUpChildName(formattedChildListName);
    toggleDialogPickup();
  };

  const handleDropOff = () => {
    const newChildList = childList.map((child) => {
      if (!child.isSelected) {
        return child; // do nothing
      }

      return {
        ...child,
        isSelected: false,
        isAtHome: false,
      };
    });
    setChildList(newChildList);

    const newChildListName = childList
      .filter((child) => !child.isAtHome)
      .map((child) => child.name);

    const formattedChildListName = newChildListName.join(", ");
    setDroppedOffChildName(formattedChildListName);
    toggleDialogDropoff();
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
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
          <ActionButton
            handleDropOff={handleDropOff}
            handleDelete={handleDelete}
            handlePickup={handlePickup}
          />
        </Box>

        {dialogPickup && (
          <DialogPickup
            isOpen={dialogPickup}
            name={pickedUpChildName}
            handleClose={toggleDialogPickup}
          />
        )}

        {dialogDropoff && (
          <DialogDropoff
            isOpen={dialogDropoff}
            name={droppedOffChildName}
            handleClose={toggleDialogDropoff}
          />
        )}

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
