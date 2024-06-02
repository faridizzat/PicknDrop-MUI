import { Box, Button, TextField } from "@mui/material";

const RegisterUser = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formContent = event.target.elements;
    console.log(formContent);
    const name = formContent.name.value;
    console.log(name);

    // const data = new FormData(event.currentTarget);
    // console.log(event.currentTarget);
    // console.log({
    //   name: data.get("name"),
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    event.target.reset();
  };
  const handleChangeName = (event) => {
    const name = event.target.value;
  };
  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        sx={{ margin: "0.3rem 0" }}
        onChange={handleChangeName}
      />

      <TextField
        id="email"
        name="email"
        label="Email Address"
        variant="outlined"
        sx={{ margin: "0.3rem 0" }}
      />

      <TextField
        id="password"
        name="password"
        label="Passwod"
        variant="outlined"
        type="password"
        sx={{ margin: "0.3rem 0" }}
      />

      <Button variant="contained" sx={{ margin: "0.3rem 0" }} type="submit">
        Register
      </Button>
    </Box>
  );
};

export default RegisterUser;
