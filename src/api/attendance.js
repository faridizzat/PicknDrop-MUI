export const getAttandanceById = async () => {
  try {
    const token = window.localStorage.getItem("token");

    const response = await fetch(`http://localhost:3000/attendance`, {
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
    const response = await fetch(`http://localhost:3000/attendance`, {
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
    const response = await fetch(`http://localhost:3000/attendance`, {
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
