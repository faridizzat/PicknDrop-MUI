import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";
import { useState } from "react";

export default function DialogAddChild(props) {
  const [newChildName, setNewChildName] = useState("");
  const handleClose = () => {
    props.onClose(false);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    props.addNewChildname(newChildName);

    handleClose();
  };

  return (
    <>
      <Dialog
        open={props.isOpen}
        onClose={props.onClose}
        PaperProps={{
          component: "form",
          onSubmit: handleOnSubmit,
        }}
      >
        <DialogTitle>Add Child</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your new child&apos;s name
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Child's Name"
            type="name"
            fullWidth
            variant="standard"
            onChange={(event) => setNewChildName(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

DialogAddChild.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  addNewChildname: PropTypes.func,
};
