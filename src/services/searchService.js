const searchService = {
  fetch: async (query, setData) => {
    fetch(`http://localhost:3000/search?product=${query}`, {
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        return response.json();
      })
      .then((response) => {
        setData(response);
      })
      .catch((error) => console.error(error));
  },
};
export default searchService;
