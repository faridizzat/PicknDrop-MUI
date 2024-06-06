export const registerUser = async ({ name, email, password }) => {
  try {
    // const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: name,
    //     email: email,
    //     password: password,
    //   }),
    // });

    const response = await fetch(`http://localhost:3000/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    // const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: name,
    //     email: email,
    //     password: password,
    //   }),
    // });

    const response = await fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
