const locationService = {
  fetch: async (userId, Authorization, setData) => {
    await fetch(`http://localhost:3000/location/${userId}/`, {
      mode: "cors",
      headers: { Authorization: Authorization },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response);
      })
      .catch((error) => console.error(error));
  },
};
export default locationService;
