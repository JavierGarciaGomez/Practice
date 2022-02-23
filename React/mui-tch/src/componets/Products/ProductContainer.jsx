import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

export const ProductContainer = () => {
  return (
    <Box sx={{ minHeight: "40vh", mr: 2, ml: 2, mt: 1 }}>
      {/* Feature Product */}
      <Grid
        sx={{
          mb: 4,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "center",
          alignItems: "center",
        }}
        container
        spacing={3}
      >
        <Grid item md={6}>
          <Box></Box>
          <Box sx={{ pl: "10px", mt: { lg: 10, xs: 2 } }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Winter Suits 2021
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non in
              nulla amet debitis illo laudantium quis earum? Excepturi
              consectetur accusamus perspiciatis fuga dignissimos deleniti.
              Dolore et sapiente amet quas.
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              $520.00
            </Typography>
            <Button variant="outlined" size="medium">
              Add to cart
            </Button>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box sx={{ pl: "10px", mt: { lg: 10, xs: 2 } }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Winter Suits 2021
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non in
              nulla amet debitis illo laudantium quis earum? Excepturi
              consectetur accusamus perspiciatis fuga dignissimos deleniti.
              Dolore et sapiente amet quas.
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#ff4081" }}
            >
              $520.00
            </Typography>
            <Button variant="outlined" size="medium">
              Add to cart
            </Button>
          </Box>
        </Grid>
      </Grid>
      {/* Product List */}
    </Box>
  );
};
