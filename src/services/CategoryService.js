const CategoryService = {
  fetch: async (id, setData) => {
    await fetch(`http://localhost:3000/categories/${id}`, { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => console.error(error));
  },
  search: async () => {},
};
export default CategoryService;
