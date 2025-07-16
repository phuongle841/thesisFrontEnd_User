import { Box, Divider, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link as RouterLink } from "react-router-dom";

export default function EmptyOrderPlaceholder() {
  return (
    <Box width="100%">
      <Typography variant="h6">
        <SearchIcon /> There are no items here.
      </Typography>
      <Divider />
      <Typography variant="h6">
        Want to wander around to find something interesting?
      </Typography>
      <Typography component={RouterLink} to="/">
        Today&#39;s Deals
      </Typography>
    </Box>
  );
}
