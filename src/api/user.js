export const getUserById = async () => {
  try {
    const token = window.localStorage.getItem("token");

    const response = await fetch(`http://localhost:3000/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
