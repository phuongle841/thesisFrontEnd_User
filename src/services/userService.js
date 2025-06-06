const userService = {
  authenticate: async (Authorization, setData) => {
    fetch(`http://localhost:3000/users/authenticate`, {
      mode: "cors",
      headers: { Authorization: Authorization },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response.userId.UserId);
      })
      .catch((error) => console.error(error));
  },
  fetch: async (userId, setData) => {
    fetch(`http://localhost:3000/users/${userId}`, { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        setData(response);
      })
      .catch((error) => console.error(error));
  },
  update: async (userId, Authorization, ignore, setData) => {},
};
export default userService;
