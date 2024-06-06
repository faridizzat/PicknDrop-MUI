export const getChild = async () => {
  try {
    const token = window.localStorage.getItem("token");

    const response = await fetch(`http://localhost:3000/children`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addChild = async (name) => {
  try {
    const token = window.localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/children`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: name }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
