import { memo } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Actions from "./Actions";
import React from "react";
import Input from "./Input";
import ErrorMessage from '../../components/Error';
import { getErrorState } from '../../store/selectors/robotSelector';
import StatusBar from "./StatusBar";

const Menu = () => {
  const errorState = useSelector(getErrorState);

  return (
    <Box display="flex" flexDirection="column" gap={4}>
      {errorState &&  <ErrorMessage /> }
      <StatusBar />
      <Actions />
      <Input />
    </Box>
  );
};

export default memo(Menu);