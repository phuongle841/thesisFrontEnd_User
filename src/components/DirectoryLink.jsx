import { Link as RouterLink } from "react-router-dom";
import { Button, Link } from "@mui/material";

function DirectoryLink({ link, buttonValue, icon }) {
  return (
    <Link component={RouterLink} to={link} display={"inherit"} underline="none">
      <Button>
        {icon ? icon : <></>}
        {buttonValue}
      </Button>
    </Link>
  );
}
export default DirectoryLink;
