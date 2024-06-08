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
import { getChild, addChild, deleteChild, updateChild } from "../api/child.js";
import "../index.css";

const HomePage = () => {
  const [childList, setChildList] = useState([]);
  const [pickedUpChildName, setPickedUpChildName] = useState([]);
  const [droppedOffChildName, setDroppedOffChildName] = useState([]);
  const [dialogDropoff, setDialogDropoff] = useState(false);
  const [dialogPickup, setDialogPickup] = useState(false);
  const [openDialogAddChild, setOpenDialogAddChild] = useState(false);
  const [selectedChild, setSelectedChild] = useState([]);
  // const [isChecked, setIsChecked] = useState(false);

  const getChildListFromApi = async () => {
    const dataFromAPI = await getChild();
    const childList = dataFromAPI.data;
    //if childList in not empty array, setchildlist
    if (childList.length > 0) {
      setChildList(childList);
      return;
    }
    return;
  };

  useEffect(() => {
    getChildListFromApi();
  }, []);

  console.log("CL before", childList);

  // const isChildSelected = (id) => {
  //   // Check if selectedChild is included in childList
  //   return childList.some((child) => child.id === id);
  // };

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
      isAtHome: data.at_home,
    };

    //reset childList
    getChildListFromApi();

    const newChildList = [...childList, newChild];
    setChildList(newChildList);
  };

  const handleChecked = (event) => {
    const targetId = event.target.id;
    const targetName = event.target.name;
    const targetChecked = event.target.checked;

    console.log({ targetId, targetChecked, targetName });

    const child = {
      id: targetId,
      name: targetName,
    };

    if (targetChecked) {
      setSelectedChild((prevChild) => [...prevChild, child]);
    } else {
      setSelectedChild((prevChild) => {
        return [...prevChild.filter((child) => child.id !== targetId)];
      });
    }
  };

  console.log("CL after", selectedChild);

  const handleDelete = async () => {
    //map selected child to name array
    const ids = selectedChild.map((child) => child.id);

    console.log("ids", ids);

    await deleteChild(ids);

    //reset childList
    getChildListFromApi();

    //set selected child empty again
    setSelectedChild([]);

    // setIsChecked(false);
  };

  const handlePickup = async () => {
    const atHome = true;
    // const ids = selectedChild;

    const ids = selectedChild.map((child) => child.id);
    const list = selectedChild.map((child) => child.name);
    const formattedList = list.join(", ");
    setPickedUpChildName(formattedList);
    await updateChild(atHome, ids);

    //reset childList
    getChildListFromApi();

    //set selected child empty again
    setSelectedChild([]);

    toggleDialogPickup();

    // setIsChecked(false);
  };

  const handleDropOff = async () => {
    const atHome = false;
    const ids = selectedChild.map((child) => child.id);
    const list = selectedChild.map((child) => child.name);
    const formattedList = list.join(", ");
    setDroppedOffChildName(formattedList);
    console.log("ids", ids);

    await updateChild(atHome, ids);

    //reset childList
    getChildListFromApi();

    //set selected child empty again
    setSelectedChild([]);

    toggleDialogDropoff();
    // setIsChecked(false);
  };

  const handleClickOpen = () => {
    setOpenDialogAddChild(true);
  };

  const handleCloseDialogAddChild = () => {
    setOpenDialogAddChild(false);
  };

  const checkSelectChild = (data) => {
    return selectedChild.includes(data);
  };

  console.log(checkSelectChild("7"));

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
                toggleSelect={handleChecked}
                selected={checkSelectChild(child.id)}
                // checked={isChecked}
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
            childList={selectedChild}
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
