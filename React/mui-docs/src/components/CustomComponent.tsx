import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/system";

interface MyThemeComponentProps {
  color?: "primary" | "secondary";
  variant?: "normal" | "dashed";
}

const customTheme = createTheme({
  components: {
    MyThemeComponent: {
      styleOverrides: {
        root: {
          color: "darkslategray",
        },
        primary: {
          color: "darkblue",
        },
        secondary: {
          color: "darkred",
          backgroundColor: "pink",
        },
      },
      variants: [
        {
          props: { variant: "dashed", color: "primary" },
          style: {
            border: "1px dashed darkblue",
          },
        },
        {
          props: { variant: "dashed", color: "secondary" },
          style: {
            border: "2px dashed darkred",
          },
        },
      ],
    },
  },
});

const MyThemeComponent = styled("div", {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== "variant" && prop !== "sx",
  name: "MyThemeComponent",
  slot: "Root",
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === "primary" && styles.primary,
    props.color === "secondary" && styles.secondary,
  ],
})<MyThemeComponentProps>(({ theme }) => ({
  backgroundColor: "aliceblue",
  padding: theme.spacing(1),
}));

export const CustomComponent = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <MyThemeComponent sx={{ m: 1 }}>Root</MyThemeComponent>
      <MyThemeComponent sx={{ m: 1 }} color="primary" variant="dashed">
        Primary
      </MyThemeComponent>
      <MyThemeComponent sx={{ m: 1 }} color="secondary" variant="dashed">
        Secondary
      </MyThemeComponent>
    </ThemeProvider>
  );
};
