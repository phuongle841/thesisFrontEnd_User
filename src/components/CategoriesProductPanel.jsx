import "../styles/CategoriesProductPanel.css";
import CategoryContainer from "./CategoryContainer";
import FilterMenu from "./FilterMenu";
function CategoriesProductPanel(props) {
  return (
    <div id="CategoriesProductPanel">
      <FilterMenu></FilterMenu>
      <CategoryContainer data={props.data}></CategoryContainer>
      <div id="recommendProduct"></div>
    </div>
  );
}
export default CategoriesProductPanel;
