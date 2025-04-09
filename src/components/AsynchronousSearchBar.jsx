import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Asynchronous() {
  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate(); // Initialize navigation

  const handleOpen = () => {
    setOpen(true);
    (async () => {
      setLoading(true);
      loadData;
      setLoading(false);
    })();
  };

  const handleClose = () => {
    setOpen(false);
    setOptions([]);
  };

  const loadData = useEffect(() => {
    if (open == true) {
      let ignore = false;
      fetch(`http://localhost:3000/search?product=${query}`, {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((response) => {
          if (ignore == false) {
            setOptions([...response]);
          }
        })
        .catch((error) => console.error(error));
      return () => {
        ignore = true;
      };
    }
  }, [query]);

  return (
    <Autocomplete
      sx={{ width: 1 }}
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      isOptionEqualToValue={(option, value) => {
        return option.productName === value.productName;
      }}
      filterOptions={(x) => {
        return x;
      }}
      onInputChange={(event, newValue) => {
        setQuery(newValue);
      }}
      onChange={(event, selectedOption) => {
        if (selectedOption) {
          navigate(`/product/${selectedOption.productId}`); // Redirect to dynamic route
        }
      }}
      getOptionLabel={(option) => {
        return option.productName;
      }}
      options={options}
      loading={loading}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            label="Search"
            onKeyDown={(event) => {
              if (event.key === "Enter" && query.trim() !== "") {
                console.log(query);
                try {
                  navigate(`/search/${encodeURIComponent(query)}`);
                } catch (error) {
                  console.log(error);
                }
              }
            }}
            slotProps={{
              input: {
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              },
            }}
          />
        );
      }}
    />
  );
}
