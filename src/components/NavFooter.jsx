import "../styles/NavFooter.css";
import NavFooterAccessibility from "./NavFooterAccessibility";
import NavFooterCopyright from "./NavFooterCopyRight";
function NavFooter() {
  return (
    <div className="NavFooter">
      <NavFooterAccessibility></NavFooterAccessibility>
      <NavFooterCopyright></NavFooterCopyright>
    </div>
  );
}
export default NavFooter;
