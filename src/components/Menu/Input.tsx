import React from "react";
import { useState } from "react";
import { Button, Box, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setPosition } from "../../store/reducers/robotReducer";

const Input = () => {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(setPosition({x, y}))
  };

  return (
    <Box>
      <Typography textAlign="left" color="grey" marginBottom="8px">Enter the coordinates to set robot position.</Typography>
      <Box display="flex" flexDirection="row" gap={2}>
        <TextField
          type="number"
          InputProps={{ inputProps: { min: 0, max: 4 } }}
          id="x-coordinate"
          value={x}
          label="X"
          onChange={e => setX(e.target.value)}
          variant="outlined"
          fullWidth
          data-testid="x-coordinate"
        />

        <TextField
          type="number"
          InputProps={{ inputProps: { min: 0, max: 4 } }}
          id="y-coordinate"
          value={y}
          label="Y"
          onChange={e => setY(e.target.value)} 
          variant="outlined"
          fullWidth
          data-testid="y-coordinate"
        />

        <Button variant="contained" fullWidth onClick={handleSubmit}>Set position</Button>
      </Box>
    </Box>
  );
};

export default Input;