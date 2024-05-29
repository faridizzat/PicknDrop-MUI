import { Avatar, Box, Typography,  } from "@mui/material"

const Cards = () => {

  const childs = [
    
    {
       id: 1,
      name: "Eren",
      imgPath: "xxx"
    },
    {
      id: 2,
      name: "Mikasa",
      imgPath: "xxx"
    },
    {
      id: 3,
      name: "Armin",
      imgPath: "xxx"
    },
    {
        id: 4,
        name: "Reiner",
        imgPath: "xxx"
      },
      {
        id: 5,
        name: "Annie",
        imgPath: "xxx"
      }
      
  ];

  return (

      <Box display={"flex"} flexDirection="row" flexWrap="wrap" justifyContent="center">
        {childs.map((child) => (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            m={2}
            key={child.id}
            
            >
            <Avatar
              alt={child.name}
              src={child.imgPath}
              sx={{ width: 100, height: 100 }}
            />
            <Typography variant="h5" p={2}>
              {child.name}
            </Typography>
          
          </Box>
        ))}
      </Box>
  );
};

export default Cards