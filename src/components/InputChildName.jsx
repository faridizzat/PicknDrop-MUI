import { FormControl, InputLabel, Input, FormHelperText, Button, Stack, Box  } from "@mui/material"
import { useState } from "react"
import PropTypes from "prop-types"

const InputChildName = (props) => {

  const [newChildName, setNewChildName] = useState("")


  const handleSubmit = (event) => {
    event.preventDefault()
    
    props.addNewChildName ({
      newChildName
    })
    
    event.target.reset()
  }

  const handleChange = (event) => {
    setNewChildName(event.target.value)
  }


  return (
    <form onSubmit={handleSubmit}>
    <FormControl >
        <Stack direction="row" spacing={2}>
            {/* Box for Input box */}
            <Box>
      <InputLabel htmlFor="childName">Child Name</InputLabel>
      <Input 
      id="childName" 
      name="childName"
      onChange={handleChange}
        />
      <FormHelperText>Enter the child name</FormHelperText>
            </Box>
            {/* Box for Button */}
            <Box>
      <Button variant="contained" type="submit">Submit</Button>
            </Box>
        </Stack>
    </FormControl>
    </form>
  )
}

InputChildName.propTypes = {
  addNewChildName: PropTypes.func,
}

export default InputChildName