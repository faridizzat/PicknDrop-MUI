import { Avatar, Box, Typography, Checkbox } from "@mui/material";
import PropTypes from "prop-types";
import "../index.css";

const AvatarChild = (props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      m={2}
      key={props.id}
    >
      <label htmlFor={props.id}>
        <Checkbox
          id={props.id}
          name={props.name}
          // sx={{ display: "none" }}
          onChange={props.toggleSelect}
        />

        <Avatar
          alt={props.name}
          src={props.imgPath}
          sx={{
            width: 100,
            height: 100,
            border: props.checked ? "2px solid black" : "none",
            boxShadow: props.checked
              ? "10px 10px 5px 0px rgba(0,0,0,0.75)"
              : "none",
          }}
        />
      </label>

      <Typography variant="h5" p={2}>
        {props.name}
      </Typography>
    </Box>
  );
};

AvatarChild.propTypes = {
  id: PropTypes.number || PropTypes.string,
  name: PropTypes.string,
  imgPath: PropTypes.string,
  checked: PropTypes.bool,
  toggleSelect: PropTypes.func,
};

export default AvatarChild;
