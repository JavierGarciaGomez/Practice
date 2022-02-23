import { Button } from "@mui/material";
import { Fragment } from "react";
import { Navbar } from "./componets/Navbar/Navbar";
import "./app.css";
import { Header } from "./componets/Header/Header";
import { GridMUI } from "./playground/GridMUI";
import { ProductContainer } from "./componets/Products/ProductContainer";
function App() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <ProductContainer />
    </Fragment>
  );
}

export default App;
