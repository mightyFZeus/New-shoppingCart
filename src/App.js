import "./styles.css";
import { useState, useEffect } from "react";
import { commerce } from "./Lib/Commerce";
import { Products, NavBar } from "./components";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  Typography: {
    fontFamily: ["Raleway", "sans-serif"].join(",")
  }
});

export default function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <ThemeProvider theme={theme}>
      <>
        <NavBar />
        <Products products={products} />
      </>
    </ThemeProvider>
  );
}
