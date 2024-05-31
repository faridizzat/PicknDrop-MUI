import PropTypes from "prop-types";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  DialogContentText,
  Button,
} from "@mui/material";

function DialogPickup(props) {
  const handleClose = () => {
    props.isOpen(false);
  };
  return (
    <Dialog
      open={props.isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Pickup"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.name} has been pickup. Make sure they are not at the back of
          the seat!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          OK!
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DialogPickup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  name: PropTypes.string,
};

export default DialogPickup;
