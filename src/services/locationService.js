const URL = import.meta.env.VITE_BACKENDURL;
const locationService = {
  fetch: async (userId, Authorization, setData) => {
    await fetch(`${URL}/location/${userId}/`, {
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
