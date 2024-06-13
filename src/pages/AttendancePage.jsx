import Navbar from "../components/Navbar";
import Container from "@mui/material/Container";
import AttendanceTable from "../components/AttendanceTable";

const AttendancePage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <AttendanceTable />
      </Container>
    </>
  );
};

export default AttendancePage;
