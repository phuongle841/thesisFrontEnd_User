const URL = import.meta.env.VITE_BACKENDURL;
const CategoryService = {
  fetch: async (id, setData) => {
    await fetch(`${URL}/categories/${id}`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => console.error(error));
  },
  fetchBatch: async (setData) => {
    await fetch(`${URL}/categories/`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => console.error(error));
  },
  search: async () => {},
};
export default CategoryService;
