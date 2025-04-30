const orderService = {
  fetch: async (userId, Authorization, setData) => {
    await fetch(`http://localhost:3000/users/${userId}/order`, {
      mode: "cors",
      method: "GET",
      headers: {
        Authorization: Authorization,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  order: async (userId, Authorization, data, setFeedback) => {
    await fetch(`http://localhost:3000/orders/user/${userId}`, {
      mode: "cors",
      method: "POST",
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
        console.log(response);
      })
      .catch((error) => {
        setFeedback("");
        console.error(error);
      });
  },
};
export default orderService;
