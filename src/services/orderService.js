const orderService = {
  fetch: async (userId, Authorization, setData, skip = 0, take = 10) => {
    await fetch(
      `http://localhost:3000/orders/user/${userId}?take=${take}&skip=${skip}`,
      {
        mode: "cors",
        method: "GET",
        headers: {
          Authorization: Authorization,
        },
      }
    )
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
  update: async (Authorization, data, setFeedback) => {
    await fetch(`http://localhost:3000/orders`, {
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
        setFeedback("success to order");
        console.log(response);
      })
      .catch((error) => {
        setFeedback("failed to order");
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
        setFeedback("success to order");
        console.log(response);
      })
      .catch((error) => {
        setFeedback("failed to order");
        console.error(error);
      });
  },
};
export default orderService;
