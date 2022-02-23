import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box sx={{ minHeight: "30rem", backgroundColor: "#df5069" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "80vh",
        }}
      >
        <Typography
          sx={{ fontFamily: "cursive", fontWeight: "bold", color: "#f8bbd0" }}
          variant="h2"
        >
          Find Your New Favorite
        </Typography>
        <Typography
          sx={{ fontFamily: "cursive", fontWeight: "bold", color: "#f8bbd0" }}
          variant="h3"
        >
          Collection at winter
        </Typography>
        <Typography
          sx={{ fontFamily: "cursive", fontWeight: "bold", color: "#f8bbd0" }}
          variant="h4"
        >
          Sale 2022
        </Typography>
      </Box>
    </Box>
  );
};
