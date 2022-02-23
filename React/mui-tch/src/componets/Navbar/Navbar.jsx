import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { ShoppingBasket, ShoppingBag } from "@mui/icons-material";
import React from "react";
import { useState } from "react";

export const Navbar = () => {
  // element where is going to be displayed
  const [anchorEl, setanchorEl] = useState(null);
  //   if there is a set anchor element is true
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setanchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setanchorEl(null);
  };

  return (
    <Box color="secondary" sx={{ backgroundColor: "fff" }}>
      <Toolbar>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "0.8rem 0rem",
          }}
        >
          {/* Logo */}
          <Box>
            <IconButton>
              <ShoppingBag sx={{ fontSize: "2.4rem" }} />
            </IconButton>
          </Box>

          {/* Links */}
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              Home
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              Brand
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
              id="basic-button"
              aria-controls={openMenu ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              onClick={handleClick}
            >
              Categories
            </Typography>
            {/* Dropdown menu */}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Men</MenuItem>
              <MenuItem onClick={handleClose}>Women</MenuItem>
              <MenuItem onClick={handleClose}>Phones</MenuItem>
              <MenuItem onClick={handleClose}>Accesories</MenuItem>
              <MenuItem onClick={handleClose}>Others</MenuItem>
            </Menu>

            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              FAQ
            </Typography>
          </Box>
          {/* Button links*/}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              disableElevation
              variant="contained"
              sx={{ backgroundColor: "#ff4081" }}
            >
              Account
            </Button>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <ShoppingBasket color="action" />
              </Badge>
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </Box>
  );
};
