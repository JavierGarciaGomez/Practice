import { Grid } from "@mui/material";
import React from "react";

export const GridMUI = () => {
  return (
    <Grid container>
      <Grid md={4} sx={{ backgroundColor: "red" }} item>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet obcaecati
        dolorum ex. Quasi eius perspiciatis deleniti eum sit facilis quia libero
        minima placeat reprehenderit saepe voluptatibus accusantium animi, harum
        vel.
      </Grid>
      <Grid md={4} sx={{ backgroundColor: "green" }} item>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet obcaecati
        dolorum ex. Quasi eius perspiciatis deleniti eum sit facilis quia libero
        minima placeat reprehenderit saepe voluptatibus accusantium animi, harum
        vel.
      </Grid>
      <Grid md={4} sx={{ backgroundColor: "blue" }} item>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet obcaecati
        dolorum ex. Quasi eius perspiciatis deleniti eum sit facilis quia libero
        minima placeat reprehenderit saepe voluptatibus accusantium animi, harum
        vel.
      </Grid>
    </Grid>
  );
};
