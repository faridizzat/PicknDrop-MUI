export const getUserById = async () => {
  try {
    const token = window.localStorage.getItem("token");

    const response = await fetch(`${import.meta.env.VITE_API_URL}/user`, {
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

export const updateUserById = async (name, email) => {
  try {
    const token = window.localStorage.getItem("token");

    const response = await fetch(`${import.meta.env.VITE_API_URL}/user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
