import React from "react";
import { Grid } from "@material-ui/core";
import Product from './Product/Product'

const products = [
  { 
    id: 1,
    name: "shoes",
   description: "Running shoes", 
   price: "$5",
  imageURL:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.cnbcfm.com%2Fapi%2Fv1%2Fimage%2F105680013-1547583426762nike1.jpg%3Fv%3D1547583682%26w%3D678%26h%3D381&imgrefurl=https%3A%2F%2Fwww.cnbc.com%2F2019%2F01%2F15%2Fyou-can-lace-nikes-adapt-bb-shoes-with-a-smartphone-app.html&tbnid=ykxqHcxO4j2PIM&vet=12ahUKEwi0waKkpqzwAhWNgc4BHY9ICYoQMygDegUIARDcAQ..i&docid=WckwwPKLM9SpVM&w=678&h=381&q=shoes&ved=2ahUKEwi0waKkpqzwAhWNgc4BHY9ICYoQMygDegUIARDcAQ' 
},
  { 
    id: 2,
     name: "MacBook",
      description: "Apple MacBook",
       price: "$10",
        imageURL:'https://unsplash.com/photos/Hin-rzhOdWs'
       }
];

const Products = () => {
  return (
    <main>
    <Grid container justify="center" spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  </main>
  )
  
};

export default Products;
