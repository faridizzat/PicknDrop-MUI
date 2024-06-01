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
  return (
    <Dialog
      open={props.isOpen}
      onClose={props.handleClose}
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
        <Button onClick={props.handleClose} autoFocus>
          OK!
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DialogPickup.propTypes = {
  isOpen: PropTypes.bool,
  name: PropTypes.string,
  handleClose: PropTypes.func,
};

export default DialogPickup;
