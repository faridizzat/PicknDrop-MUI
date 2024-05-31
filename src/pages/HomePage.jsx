import { Container, Box } from "@mui/material";
import Navbar from "../components/Navbar";
import InputChildName from "../components/InputChildName";
import Cards from "../components/Cards";
import DateToday from "../components/DateToday";
import ChildStatus from "../components/ChildStatus";
// import ActionButton from "../components/ActionButton";
import { useState } from "react";
import PropTypes from "prop-types";

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

  // const [highlightedChildren, setHighlightedChildren] = useState([]);

  // const handleSelectedChildren = (selectedChildren) => {
  //   const highlightedChildren = selectedChildren;
  //   console.log( highlightedChildren, "<<<fromHomePage");
  // };

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
          <Cards
            childList={childList}
          />
        </Box>

        {/* <Box p={2} m={2} display={"flex"} justifyContent={"center"}>
          <ActionButton highlightedChildren={highlightedChildren} />
        </Box> */}

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
