import React from "react";
import "./Upi.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
const Upi = () => {
  const upi_ids = [
    { value: "@oksbi", label: "@oksbi" },
    { value: "@ybl", label: "@ybl" },
    { value: "@okaxis", label: "@okaxis" },
    { value: "@okhdfcbank", label: "@okhdfcbank" },
    { value: "@oksbi", label: "@oksbi" },
  ];
  return (
    <>
      <div className="Upi">
        <div className="upi_title">
          <p>UPI</p>
        </div>
        <div className="upi_input">
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your upi"
          >
            {upi_ids.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
    </>
  );
};
export default Upi;
