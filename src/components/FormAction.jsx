import AvatarChild from "./AvatarChild";
import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { getChild } from "../api/child.js";
const FormAction = () => {
  const [childList, setChildList] = useState([]);
  const [selectedChildId, setSelectedChildId] = useState(null);

  const getChildListFromApi = async () => {
    const dataFromAPI = await getChild();
    const childList = dataFromAPI.data;
    //if childList in not empty array, setchildlist
    if (childList.length > 0) {
      setChildList(childList);
    }
    return;
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
  };

  const handleFormSubmit = (action) => {
    // Determine action based on the parameter passed
    switch (action) {
      case "action1":
        // Action for the first button
        console.log("Action 1 triggered");
        // Add your code to perform action 1 here
        break;
      case "action2":
        // Action for the second button
        console.log("Action 2 triggered");
        // Add your code to perform action 2 here
        break;
      case "action3":
        // Action for the third button
        console.log("Action 3 triggered");
        // Add your code to perform action 3 here
        break;
      default:
        console.error("Unknown action");
    }
  };

  useEffect(() => {
    getChildListFromApi();
  }, []);

  const handleDropOff = (id) => {
    console.log("DropOff clicked for child:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete clicked for child:", id);
  };

  const handlePickup = (id) => {
    console.log("Pickup clicked for child:", id);
  };

  return (
    <Box component={"form"} onSubmit={handleOnSubmit}>
      {childList.map((child) => {
        return (
          <AvatarChild
            key={child.id}
            id={child.id}
            name={child.name}
            imgPath={child.imgPath}
            // toggleSelect={handleChecked}
            // checked={isChildSelected}
          />
        );
      })}

      <Button
        id="dropoff"
        type="submit"
        onclick={() => handleFormSubmit("action1")}
      >
        DropOff
      </Button>
      <Button
        type="submit"
        id="delete"
        onclick={() => handleFormSubmit("action2")}
      >
        Delete
      </Button>
      <Button
        type="submit"
        id="pickup"
        onclick={() => handleFormSubmit("action3")}
      >
        Pickup
      </Button>
    </Box>
  );
};

export default FormAction;
