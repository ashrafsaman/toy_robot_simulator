import React from "react";
import { useSelector } from "react-redux";
import { Alert } from "@mui/material";
import { getRobotPosition } from '../../store/selectors/robotSelector';

const StatusBar = () => {
  const robotPosition = useSelector(getRobotPosition);

  return (
    <Alert severity="success" data-testid="status">
      Status: Position(Row: {robotPosition.y}, Column: {robotPosition.x})
    </Alert>
  );
};

export default StatusBar;