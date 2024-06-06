export const registerUser = async ({ name, email, password }) => {
  console.log("ENV: ", import.meta.env.VITE_API_URL);
  try {
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
