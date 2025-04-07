import { useEffect } from "react";

function ApiFetcher(url, setCallBack) {
  useEffect(() => {
    let ignore = false;
    setCallBack(null);
    fetch(url, { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        if (!ignore) {
          setCallBack(response);
        }
      })
      .catch((error) => console.error(error));

    return () => {
      ignore = true;
    };
  }, []);
}
export default ApiFetcher;
