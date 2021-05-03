import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./Styles";
const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.imageURL}
          title={product.name}
        />
        <CardContent>
          <div className={classes.content}>
            <Typography variant="h5" guttterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" guttterBottom>
              {product.price}
            </Typography>
          </div>
          <Typography variant="body2" color="textSecondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add To Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
