const cartService = {
  fetch: async function (userId, Authorization, setData) {
    await fetch(`http://localhost:3000/users/${userId}/cart`, {
      mode: "cors",
      headers: {
        Authorization: Authorization,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const { cartRecord } = response;
        setData(cartRecord);
      })
      .catch((error) => console.error(error));
  },
  update: async function (userId, Authorization, data) {
    await fetch(`http://localhost:3000/users/${userId}/cart`, {
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
