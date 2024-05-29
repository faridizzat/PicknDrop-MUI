import { Typography } from "@mui/material";

const DateToday = () => {
  // Suggested code may be subject to a license. Learn more: ~LicenseLog:138441374.
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  const todayDate = month + " " + day + ", " + year;

  return <Typography variant="h4">{todayDate}</Typography>;
};

export default DateToday;
