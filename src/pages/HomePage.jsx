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

  const toggleDialogDropoff = () => {
    setDialogDropoff(!dialogDropoff);
  };

  const toggleDialogPickup = () => {
    setDialogPickup(!dialogPickup);
  };

  const handleAddNewChildName = async (name, imgPath) => {
    const img = generateRandomImage();
    const data = await addChild(name, img);

    const newChild = {
      id: data.id,
      name: data.name,
      isAtHome: data.at_home,
      imgPath: data.imgpath,
    };
    console.log(newChild);

    //reset childList
    getChildListFromApi();

    const newChildList = [...childList, newChild];
    setChildList(newChildList);
  };

  const handleChecked = (childId) => () => {
    setSelectedChild(
      (prevIds) =>
        prevIds.includes(childId)
          ? prevIds.filter((id) => id !== childId) // Remove if already selected
          : [...prevIds, childId] // Add if not selected
    );
  };

  const handleDelete = async () => {
    await deleteChild(selectedChild);

    //reset childList
    getChildListFromApi();

    //set selected child empty again
    setSelectedChild([]);

    // setIsChecked(false);
  };

  const handlePickup = async () => {
    const atHome = true;

    // Find the selected children from the childList
    const selectedChildren = childList.filter((child) =>
      selectedChild.includes(child.id)
    );

    // Extract the names of the selected children
    const selectedChildNames = selectedChildren.map((child) => child.name);

    const formattedList = selectedChildNames.join(", ");
    setPickedUpChildName(formattedList);
    await updateChild(atHome, selectedChild);

    //reset childList
    getChildListFromApi();

    //set selected child empty again
    setSelectedChild([]);

    toggleDialogPickup();
  };

  const handleDropOff = async () => {
    const atHome = false;
    // Find the selected children from the childList
    const selectedChildren = childList.filter((child) =>
      selectedChild.includes(child.id)
    );

    // Extract the names of the selected children
    const selectedChildNames = selectedChildren.map((child) => child.name);
    const formattedList = selectedChildNames.join(", ");
    setDroppedOffChildName(formattedList);

    await updateChild(atHome, selectedChild);

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

  console.log(childList);

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
                imgPath={child.img_path}
                toggleSelect={handleChecked(child.id)}
                checked={selectedChild.includes(child.id)}
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
