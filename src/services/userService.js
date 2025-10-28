const URL = import.meta.env.VITE_BACKENDURL;

const userService = {
  authenticate: async (Authorization, setData) => {
    fetch(`${URL}/users/authenticate`, {
      mode: "cors",
      headers: { Authorization: Authorization },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response.userId);
      })
      .catch((error) => console.error(error));
  },
  fetch: async (userId, setData) => {
    fetch(`${URL}/users/${userId}`, { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => console.error(error));
  },
  update: async (userId, Authorization, data, setData) => {
    await fetch(`${URL}/users/${userId}/`, {
      mode: "cors",
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: Authorization,
      },
      body: JSON.stringify({ user: data }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // set notification?
        setData("success");
      })
      .catch((error) => console.error(error));
  },
};
export default userService;
