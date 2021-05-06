import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia
} from "@material-ui/core";
import useStyles from "./Styles";

const CartItem = ({ item,handleUpdateCartQty, handleRemoveFromCart }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button 
          type="button"
           size="small"
           onClick={() => handleUpdateCartQty(item.id, item.quantity- 1)}>
            -
          </Button>
          <Button 
          type="button" 
          size="small"
          onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
          <Typography>{item.quantity}</Typography>
        </div>
        <Button onClick={() =>handleRemoveFromCart(item.id)} variant="contained" type="button" color="secondary">
          remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
