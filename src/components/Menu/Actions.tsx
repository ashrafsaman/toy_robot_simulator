import React from "react";
import { memo, useEffect } from "react";
import { ButtonGroup, Button, Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { moveRobot } from "../../store/reducers/robotReducer";
import { Directions, KeyCodes } from "../../constants";

const Actions = () => {

  const dispatch = useDispatch();
  const handleAction = (direction: string) => dispatch(moveRobot(direction));

  useEffect(() => {
    function handleKeyDown(e: any) {
      const keycode = e.keyCode as number;
      if (keycode > 36 && keycode <= 40) {
        dispatch(moveRobot(KeyCodes[keycode]));
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    //cleanup
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  });

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Typography textAlign="left" color="grey">Press UP, DOWN, LEFT, RIGHT button to move the robot.</Typography>
      <ButtonGroup color="primary" aria-label="medium primary button group" data-testid="button-group">
        {Object.keys(Directions).map((direction, i) => 
          <Button key={i} data-testid="button" onClick={()=>handleAction(direction)}>{direction}</Button>
        )}
      </ButtonGroup>
    </Box>
  );
};

export default memo(Actions);