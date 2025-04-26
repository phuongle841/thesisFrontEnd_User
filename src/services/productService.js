const productService = {
  fetchProduct: async (id, setData) => {
    await fetch(`http://localhost:3000/products/${id}`, { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => console.error(error));
  },
};
export default productService;
