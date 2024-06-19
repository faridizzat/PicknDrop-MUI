import PropTypes from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, TableCell, TableRow } from "@mui/material";

const TableRows = (props) => {
  return (
    <TableRow
      key={props.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {props.child_name}
      </TableCell>
      <TableCell align="right">{props.attendance_date}</TableCell>
      <TableCell align="right">{props.pickup_time}</TableCell>
      <TableCell align="right">{props.dropoff_time}</TableCell>
      <TableCell align="right">
        <Button
          sx={{ color: "black" }}
          size="small"
          onClick={props.handleDelete}
        >
          <DeleteIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};

TableRows.propTypes = {
  handleDelete: PropTypes.func,
  id: PropTypes.number,
  child_name: PropTypes.string,
  attendance_date: PropTypes.string,
  pickup_time: PropTypes.string,
  dropoff_time: PropTypes.string,
};

export default TableRows;
