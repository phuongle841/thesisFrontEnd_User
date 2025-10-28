const URL = import.meta.env.VITE_BACKENDURL;
const reviewService = {
  post: async function (Authorization, data, setUpdateStatus) {
    await fetch(`${URL}/review`, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: Authorization,
      },
      body: JSON.stringify({ ...data }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // reload page?
        // set notification?
      })
      .catch((error) => console.error(error));
  },
};
export default reviewService;
