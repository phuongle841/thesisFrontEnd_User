import {
  Typography,
  Slider,
  Stack,
  Tooltip,
  Zoom,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Box,
} from "@mui/material";
import { useState } from "react";

function FilterMenu() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <FormControl>
        <Box>
          <p>Popular Shopping Ideas</p>
        </Box>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>

        <Typography color={"textSecondary"} gutterBottom>
          Related Product
        </Typography>
        <p>Price slider</p>

        <Stack spacing={2} direction="row" sx={{ alignItems: "center", mb: 1 }}>
          <p>0</p>
          <Tooltip
            enterTouchDelay={0}
            placement="top"
            title={value}
            slots={{
              transition: Zoom,
            }}
          >
            <Slider
              aria-label="Volume"
              value={value}
              onChange={handleChange}
              color="primary"
              size="small"
            />
          </Tooltip>
          <p>100</p>
        </Stack>
        <legend>
          <Typography color={"textSecondary"} gutterBottom>
            deal and discount
          </Typography>
          <p>
            All Discounts <br /> Today's Deals
          </p>
        </legend>
        <p>customer review slider</p>
        <p>brand</p>
        <p>seller</p>
        <p>genre</p>
      </FormControl>
    </>
  );
}
export default FilterMenu;
