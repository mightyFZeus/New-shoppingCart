import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./Styles";

const products = [
  {
    id: 1,
    name: "shoes",
    description: "Running shoes",
    price: "$5",
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/71Vud7LPxoS._AC_UX500_.jpg"
  },
  {
    id: 2,
    name: "MacBook",
    description: "Apple MacBook",
    price: "$10",
    imageURL:
      "https://m.media-amazon.com/images/I/71k--F6wVGL._AC_UL480_FMwebp_QL65_.jpg"
  }
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
