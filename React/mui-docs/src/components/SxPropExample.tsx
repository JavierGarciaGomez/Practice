import React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import { colors } from "../constants/constants";

const theme = createTheme({
  palette: {
    background: {
      paper: colors.lightColor,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },

    success: {
      dark: colors.successDark,
    },
  },
});

export const SxPropExample = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
      >
        <Box sx={{ color: "text.secondary" }}>Sessions</Box>
        <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
          98.3 K
        </Box>
        <Box
          sx={{
            color: "success.dark",
            display: "inline",
            fontWeight: "bold",
            mx: 0.5,
            fontSize: 14,
          }}
        >
          +18.77%
        </Box>
        <Box sx={{ color: "text.secondary", display: "inline", fontSize: 14 }}>
          vs. last week
        </Box>
      </Box>
    </ThemeProvider>
  );
};
