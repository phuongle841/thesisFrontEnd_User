import { useEffect } from "react";

function useSyncCart({ userId, cart, cookieState }) {
  useEffect(() => {
    let ignore = false;
    if (userId != null) {
      const data = cart.map((e) => {
        return {
          recordId: e.recordId,
          ProductId: e.recordProduct.productId,
          quantity: e.quantity,
        };
      });
      fetch(`http://localhost:3000/users/${userId}/cart`, {
        mode: "cors",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: cookieState,
        },
        body: JSON.stringify({ data: data }),
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          if (ignore == false) {
            // todo
          }
        })
        .catch((error) => console.error(error));
    }
    return () => {
      ignore = true;
    };
  }, [cart]);
}
export default useSyncCart;
