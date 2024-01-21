import React from "react";
import { Alert } from "@mui/material";

const ErrorMessage = () => {
  return (
    <Alert data-testid="error" severity="error">Invalid move</Alert>
  );
};

export default ErrorMessage;