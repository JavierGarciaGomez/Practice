import React from "react";
import { createTheme, styled } from "@mui/system";
import { ThemeProvider } from "@mui/material";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      contrastText: "white",
    },
  },
});

const MyThemeComponent = styled("div")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(5),
  margin: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
}));

export const ThemeUsage = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <MyThemeComponent>Styled div with theme</MyThemeComponent>
    </ThemeProvider>
  );
};
