import { Box } from "@mui/material";
import React from "react";

interface Props {
  completed: boolean;
  bar: boolean;
}

export const SxArrayValues = ({ completed, bar }: Props) => {
  console.log(completed, bar);
  return (
    <Box
      sx={[
        {
          color: "cyan",
          backgroundColor: "lime",
        },
        completed && {
          backgroundColor: "orangered",
        },

        bar && {
          backgroundColor: "yellow",
        },
      ]}
    >
      Change color in an array depending on props
    </Box>
  );
};
