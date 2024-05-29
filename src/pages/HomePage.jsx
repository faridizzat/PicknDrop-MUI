import { Container, Box, Typography } from "@mui/material"
import Navbar from "../components/Navbar"
import InputChildName from "../components/InputChildName"
import Cards from "../components/Cards"
import DateToday from "../components/DateToday"
import ChildStatus from "../components/ChildStatus"
import ActionButton from "../components/ActionButton"


const HomePage = () => {


  return (
    <>
    <Navbar />
    <Container maxWidth="lg">
        
        {/* Title */}
        <Box p={2} m={2} display={"flex"} justifyContent={"center"}>
        <Typography variant="h4">PicknDrop</Typography>
        </Box>

        {/* Input field */}
        <Box p={2} m={2} display={"flex"} justifyContent={"center"}>
        <InputChildName />
        </Box>

        {/* Avatar */}
        <Box p={2} m={2} display={"flex"} justifyContent={"center"}>
        <Cards />
        </Box>

        <Box p={2} m={2} display={"flex"} justifyContent={"center"}>
        <ActionButton />
        </Box>

        <Box p={2} m={2} display={"flex"} justifyContent={"center"}>
        <DateToday />
        </Box>

        <Box p={2} m={2} display={"flex"} justifyContent={"center"}>
        <ChildStatus />
        </Box>

    </Container>
    </>
  )
}

export default HomePage