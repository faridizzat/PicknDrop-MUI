import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";
import { deleteAttendance, getAttendanceById } from "../api/attendance";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableRows from "../components/TableRows";

const AttendancePage = () => {
  const [attendanceList, setAttendanceList] = useState([]);

  const getAttendanceList = async () => {
    const attendanceListData = await getAttendanceById();
    const attendanceList = attendanceListData.data;
    setAttendanceList(attendanceList);
  };

  useEffect(() => {
    getAttendanceList();
  }, []);

  const handleDelete = async (id) => {
    await deleteAttendance(id);
    getAttendanceList();
  };

  // const handleDelete = async (id) => {
  //   try {
  //     console.log("id", id);
  //     await deleteAttendance(id);
  //     await getAttendanceById();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
              {attendanceList.map((list) => (
                <TableRows
                  handleDelete={handleDelete}
                  key={list.id}
                  id={list.id}
                  child_name={list.child_name}
                  attendance_date={list.attendance_date}
                  pickup_time={list.pickup_time}
                  dropoff_time={list.dropoff_time}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default AttendancePage;
