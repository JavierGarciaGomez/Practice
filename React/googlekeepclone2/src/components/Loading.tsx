import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

export const Loading = () => {
  return (
    <Backdrop open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
