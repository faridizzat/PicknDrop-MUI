export const getChild = async () => {
  try {
    const token = window.localStorage.getItem("token");

    const response = await fetch(`${import.meta.env.VITE_API_URL}/children`, {
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

export const addChild = async (name, imgPath) => {
  try {
    const token = window.localStorage.getItem("token");
    const response = await fetch(`${import.meta.env.VITE_API_URL}/children`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: name, imgPath: imgPath }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateChild = async (at_home, id) => {
  try {
    const token = window.localStorage.getItem("token");
    const response = await fetch(`${import.meta.env.VITE_API_URL}/children`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        at_home: at_home,
        id: id,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteChild = async (id) => {
  try {
    const token = window.localStorage.getItem("token");
    const response = await fetch(`${import.meta.env.VITE_API_URL}/children`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
