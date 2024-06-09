const auhtCheck = () => {
  const token = window.localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};
export default auhtCheck;
