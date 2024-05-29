import { FormControl, InputLabel, Input, FormHelperText, Button, Stack, Box  } from "@mui/material"

const InputChildName = () => {
  return (
    <FormControl >
        <Stack direction="row" spacing={2}>
            {/* Box for Input box */}
            <Box>
      <InputLabel htmlFor="childName">Child Name</InputLabel>
      <Input id="childName" />
      <FormHelperText>Enter the child name</FormHelperText>
            </Box>
            {/* Box for Button */}
            <Box>
      <Button variant="contained">Submit</Button>
            </Box>
        </Stack>
    </FormControl>
  )
}

export default InputChildName