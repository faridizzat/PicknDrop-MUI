import { Container, Box, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import DateToday from "../components/DateToday";
import ChildStatus from "../components/ChildStatus";
import ActionButton from "../components/ActionButton";
import { useState, useEffect } from "react";
import AvatarChild from "../components/AvatarChild";
import DialogDropoff from "../components/DialogDropoff";
import DialogPickup from "../components/DialogPickup";
import generateRandomImage from "../utils/generateRandomImage";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DialogAddChild from "../components/DialogAddChild";
import { getChild, addChild, deleteChild } from "../api/child.js";

const HomePage = () => {
  const [childList, setChildList] = useState([]);
  const [pickedUpChildName, setPickedUpChildName] = useState([]);
  const [droppedOffChildName, setDroppedOffChildName] = useState([]);
  const [dialogDropoff, setDialogDropoff] = useState(false);
  const [dialogPickup, setDialogPickup] = useState(false);
  const [openDialogAddChild, setOpenDialogAddChild] = useState(false);
  const [selectedChild, setSelectedChild] = useState([]);

  const getChildListFromApi = async () => {
    const dataFromAPI = await getChild();
    const childList = dataFromAPI.data;
    //if childList in not empty array, setchildlist
    if (childList.length > 0) {
      setChildList(childList);
    }
    return;
  };

  useEffect(() => {
    getChildListFromApi();
  }, []);

  console.log(childList);
  const toggleDialogDropoff = () => {
    setDialogDropoff(!dialogDropoff);
  };

  const toggleDialogPickup = () => {
    setDialogPickup(!dialogPickup);
  };

  const handleAddNewChildName = async (name) => {
    const data = await addChild(name);

    const newChild = {
      id: data.id,
      name: data.name,
      imgPath: generateRandomImage(),
      isAtHome: data.at_home,
      isSelected: false,
    };

    //reset childList
    getChildListFromApi();

    const newChildList = [...childList, newChild];
    setChildList(newChildList);
  };

  const handleChecked = (event) => {
    const targetId = event.target.id;
    const targetChecked = event.target.checked;

    const newCheckedAll = selectedChild.slice(); // Create a copy of selectedChild

    if (targetChecked) {
      newCheckedAll.push(targetId); // Add the ID if the child is checked
    } else {
      const index = newCheckedAll.indexOf(targetId);
      if (index !== -1) {
        newCheckedAll.splice(index, 1); // Remove the ID if the child is unchecked
      }
    }

    console.log("NC>>", newCheckedAll);

    setSelectedChild(newCheckedAll); // Update isCheckedAll state
  };

  const handleDelete = async () => {
    const ids = selectedChild;

    console.log("selectedChild Before>>", selectedChild);

    await deleteChild(ids);

    //reset childList
    getChildListFromApi();

    //set selected child empty again
    setSelectedChild([]);

    // const newChildList = childList.filter((child) => !child.isSelected);
    // setChildList(newChildList);
  };

  console.log("selectedChild After>>", selectedChild);

  const handlePickup = () => {
    const newChildList = childList.map((child) => {
      const newChildListName = childList
        .filter((child) => child.isSelected)
        .map((child) => child.name);
      const formattedChildListName = newChildListName.join(", ");
      setPickedUpChildName(formattedChildListName);

      if (!child.isSelected) {
        return child;
      }

      return {
        ...child,
        isSelected: false,
        isAtHome: true,
      };
    });
    setChildList(newChildList);

    toggleDialogPickup();
  };

  const handleDropOff = () => {
    const newChildListName = childList
      .filter((child) => child.isSelected)
      .map((child) => child.name);
    const formattedChildListName = newChildListName.join(", ");
    setDroppedOffChildName(formattedChildListName);

    const newChildList = childList.map((child) => {
      if (!child.isSelected) {
        return child;
      }

      return {
        ...child,
        isSelected: false,
        isAtHome: false,
      };
    });
    setChildList(newChildList);

    toggleDialogDropoff();
  };

  const handleClickOpen = () => {
    setOpenDialogAddChild(true);
  };

  const handleCloseDialogAddChild = () => {
    setOpenDialogAddChild(false);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        {/* Avatar */}
        <Box
          p={2}
          m={2}
          display={"flex"}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          {childList.map((child) => {
            return (
              <AvatarChild
                key={child.id}
                id={child.id}
                name={child.name}
                imgPath={child.imgPath}
                checked={child.isChecked}
                toggleSelect={handleChecked}
              />
            );
          })}
          <Button onClick={handleClickOpen}>
            <AddCircleOutlineIcon sx={{ width: 50, height: 50 }} />
          </Button>
        </Box>

        {DialogAddChild && (
          <DialogAddChild
            isOpen={openDialogAddChild}
            onClose={handleCloseDialogAddChild}
            addNewChildname={handleAddNewChildName}
          />
        )}

        <Box p={2} m={2} display={"flex"} justifyContent={"center"}>
          <ActionButton
            handleDropOff={handleDropOff}
            handleDelete={handleDelete}
            handlePickup={handlePickup}
            childList={childList}
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

        <Box
          p={2}
          m={2}
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent="center"
          alignItems="center"
        >
          <ChildStatus childList={childList} />
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
