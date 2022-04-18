import { Box, Button, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";

import "./App.css";
import { CustomComponent } from "./components/CustomComponent";
import PassingSxProp from "./components/PassingSxProp";
import { SxArrayValues } from "./components/SxArrayValues";
import { SxPropExample } from "./components/SxPropExample";
import { ThemeUsage } from "./components/ThemeUsage";

const defaultStyle = {
  color: "white",
  backgroundColor: "red",
};

function App() {
  return (
    <div className="App">
      <h1>Material UI Documentation</h1>
      <h2>System</h2>
      <h3>2. Properties</h3>
      <h4>Legend</h4>
      <h5>Theme mapping</h5>
      <Typography>Using a call back from theme inside sx</Typography>
      <Button sx={{ margin: (theme) => theme.spacing(3) }}>Btn 1</Button>

      <h5>Testing a prop</h5>
      <Button sx={{ ...defaultStyle }}>Btn 2</Button>
      <h3>3. The Sx Prop</h3>
      <h4>a-Example</h4>
      <SxPropExample />
      <h4>b-Theme aware properties</h4>
      <h5>i. borders</h5>
      <Box sx={{ border: 2, borderRadius: 2, borderColor: "secondary.main" }}>
        Box with primary main
      </Box>
      <h5>ii. display</h5>
      <Box sx={{ displayPrint: "none" }}>Box not displayed for print</Box>
      <h5>iii. Grid</h5>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20",
        }}
      >
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </Box>
      <Typography>The gap in grid is mult by 8 </Typography>
      <h4>e-Array values</h4>
      <SxArrayValues completed={true} bar={false} />
      <h4>f-Array Passing sx prop</h4>
      <PassingSxProp />
      <h3>17. Styled</h3>
      <h4>d-Using the theme</h4>
      <ThemeUsage />
      <h4>e-Custom Components</h4>
      <CustomComponent />
      <h2>Customization</h2>
    </div>
  );
}

export default App;
