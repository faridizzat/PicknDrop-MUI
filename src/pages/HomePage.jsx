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
import { getChild, addChild } from "../api/child.js";

const HomePage = () => {
  const [childList, setChildList] = useState([]);
  const [pickedUpChildName, setPickedUpChildName] = useState([]);
  const [droppedOffChildName, setDroppedOffChildName] = useState([]);
  const [dialogDropoff, setDialogDropoff] = useState(false);
  const [dialogPickup, setDialogPickup] = useState(false);
  const [openDialogAddChild, setOpenDialogAddChild] = useState(false);

  const getChildListFromApi = async () => {
    const dataFromAPI = await getChild();
    const childList = dataFromAPI.data;
    setChildList(childList);
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
    console.log("from HP>>", data);

    const newChild = {
      id: data.id,
      name: data.name,
      imgPath: generateRandomImage(),
      isAtHome: true,
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
                checked={child.isSelected}
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
