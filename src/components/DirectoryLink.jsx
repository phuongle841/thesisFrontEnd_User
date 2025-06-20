import { Link as RouterLink } from "react-router-dom";
import { Button, Link } from "@mui/material";
import { getCookieValue } from "../utils/Cookies";

function DirectoryLink({ link, buttonValue, icon, sx }) {
  return (
    <Link component={RouterLink} to={link} display={"inherit"} underline="none">
      <Button sx={sx}>
        {icon ? icon : <></>}
        {buttonValue}
      </Button>
    </Link>
  );
}

export function DirectoryLinkSetting({
  link,
  buttonValue,
  icon,
  callbackFunction,
}) {
  return (
    <Link
      component={RouterLink}
      to={link}
      display={"inherit"}
      underline="none"
      onClick={callbackFunction}
    >
      <Button sx={{ width: "100%", textAlign: "center" }}>
        {icon ? icon : <></>}
        {buttonValue}
      </Button>
    </Link>
  );
}

export default DirectoryLink;
