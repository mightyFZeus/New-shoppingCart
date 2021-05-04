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
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  Typography: {
    fontFamily: ["Raleway", "sans-serif"].join(",")
  }
});

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
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
            <Typography
              dangerouslySetInnerHTML={{ __html: product.description }}
              variant="body2"
              color="textSecondary"
            />
          </CardContent>
          <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="Add To Cart" onClick={() => onAddToCart(product.id,1)}>
              <AddShoppingCart />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default Product;
