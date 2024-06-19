import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";
import { deleteAttendance, getAttandanceById } from "../api/attendance";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

const AttendancePage = () => {
  const [attendanceList, setAttendanceList] = useState([]);

  const getAttendanceList = async () => {
    const attendanceListData = await getAttandanceById();
    const attendanceList = attendanceListData.data;
    setAttendanceList(attendanceList);
  };

  useEffect(() => {
    getAttendanceList();
  }, []);

  const handleDelete = async () => {
    const deleteList = await deleteAttendance();
    setAttendanceList(deleteList);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Pick Up time</TableCell>
                <TableCell align="right">Drop Off time</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attendanceList?.map((list) => (
                <TableRow
                  key={list.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {list.child_name}
                  </TableCell>
                  <TableCell align="right">{list.attendance_date}</TableCell>
                  <TableCell align="right">{list.pickup_time}</TableCell>
                  <TableCell align="right">{list.dropoff_time}</TableCell>
                  <TableCell align="right">
                    <Button
                      sx={{ color: "black" }}
                      size="small"
                      onClick={handleDelete}
                    >
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default AttendancePage;
