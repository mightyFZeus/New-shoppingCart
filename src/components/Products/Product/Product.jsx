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
          image={product.media.source}
          title={product.name}
        />
        <CardContent>
          <div className={classes.content}>
            <Typography variant="h5" guttterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" guttterBottom>
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography dangerouslySetinnerHTML={{__html:product.description}} variant="body2" color="textSecondary" />
            
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