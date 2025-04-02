import { useEffect, useState } from "react";
import { getCookieValue } from "../utils/Cookies";

function Cart() {
  const [loginStatus, setLoginStatus] = useState(false);
  useEffect(() => {
    let ignore = false;
    fetch(`http://localhost:3000/login`, {
      headers: {
        Authorization: "Bearer " + getCookieValue("Authorization"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (ignore == false) {
          setLoginStatus(true);

          // setOptions([...response]);
        }
      })
      .catch((error) => console.error(error));
    return () => {
      ignore = true;
    };
  });
  return (
    <>
      <p>this is cart</p>
      {loginStatus == null ? <p>error in fetch</p> : <p>no problem</p>}
    </>
  );
}

export default Cart;
