export const getAttendanceById = async () => {
  try {
    const token = window.localStorage.getItem("token");

    const response = await fetch(`${import.meta.env.VITE_API_URL}/attendance`, {
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

export const createAttendance = async (childId, attendanceDate) => {
  try {
    const token = window.localStorage.getItem("token");
    const response = await fetch(`${import.meta.env.VITE_API_URL}/attendance`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        childId: childId,
        attendanceDate: attendanceDate,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateAttendance = async (at_home, childId, attendanceDate) => {
  try {
    const token = window.localStorage.getItem("token");
    const response = await fetch(`${import.meta.env.VITE_API_URL}/attendance`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        at_home: at_home,
        childId: childId,
        attendanceDate: attendanceDate,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAttendance = async (id) => {
  try {
    const token = window.localStorage.getItem("token");
    const response = await fetch(`${import.meta.env.VITE_API_URL}/attendance`, {
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
