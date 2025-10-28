const URL = import.meta.env.VITE_BACKENDURL;
const cartService = {
  fetch: async function (userId, Authorization, setData) {
    await fetch(`${URL}/cart/${userId}`, {
      mode: "cors",
      headers: {
        Authorization: Authorization,
      },
    })
      .then((response) => {
        return response.clone().json();
      })
      .then((response) => {
        const { cartRecord } = response;
        setData(cartRecord);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  update: async function (userId, Authorization, data) {
    await fetch(`${URL}/users/${userId}/cart`, {
      mode: "cors",
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: Authorization,
      },
      body: JSON.stringify({ data: data }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // set notification?
      })
      .catch((error) => console.error(error));
  },
};
export default cartService;
