import "../styles/CategoriesProductPanel.css";
import CategoryContainer from "./CategoryContainer";
import FilterMenu from "./FilterMenu";
function CategoriesProductPanel(props) {
  return (
    <div id="CategoriesProductPanel">
      <FilterMenu data={props.data}></FilterMenu>
      <CategoryContainer data={props.data}></CategoryContainer>
    </div>
  );
}
export default CategoriesProductPanel;
