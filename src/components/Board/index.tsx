import React from "react";
import { useCallback } from "react";
import { Box } from "@mui/system";
import { BoardSize } from "../../constants";
import { Sqaure } from "../../styledComponents";
import Robot from "../Robot";

const Board = () => {

  const rows = Array.from(Array(BoardSize).keys());
  const columns = Array.from(Array(BoardSize).keys());

  const renderBoardRow = useCallback(
    (rowNumber: number) => (
        <Box display="flex" key={`row-${rowNumber}`} width="100%">
          {columns.map((columnNumber: number) => (
            <Sqaure key={`col-${columnNumber}`} />
          ))}
        </Box>
    ),
    [columns]
  );


  return (
    <Box position="relative" display="flex" flexDirection="column" width="100%">
      {rows.map(renderBoardRow)}
      <Robot />
    </Box>
  );
};

export default Board;
