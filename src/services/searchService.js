const URL = import.meta.env.VITE_BACKENDURL;
const searchService = {
  fetch: async (query, setData) => {
    fetch(`${URL}/search?product=${query}`, {
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        return response.json();
      })
      .then((response) => {
        setData([...response]);
      })
      .catch((error) => console.error(error));
  },
};
export default searchService;
