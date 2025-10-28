const URL = import.meta.env.VITE_BACKENDURL;
const productService = {
  fetchProduct: async (id, setData) => {
    await fetch(`${URL}/products/${id}`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => console.error(error));
  },
};
export default productService;
