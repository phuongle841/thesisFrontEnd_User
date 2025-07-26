import "../styles/ResultDisplayBar.css";
function ResultDisplayBar({ data }) {
  return (
    <div id="ResultDisplayBar">
      <p>
        1-48 of over 1,000,000 results for &quot;
        <span>{data.categoryTitle}</span>&quot;{" "}
      </p>
      <select name="Sort" id="Sort">
        <option value="Featured">Sort by: Featured</option>
        <option value="Price-high-low">Price: High to Low</option>
        <option value="Price-low-high">Price: Low to High</option>
        <option value="Customer-review">Customer Review</option>
        <option value="Newest">Newest Arrival</option>
        <option value="Best-seller">Best Sellers</option>
      </select>
    </div>
  );
}
export default ResultDisplayBar;
