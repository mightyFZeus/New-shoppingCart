import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import useStyles from "./Styles";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
export default function Cart({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart
}) {
  const classes = useStyles();

  console.log(cart.line_items, "test");
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in the cart
      <br />
      <Link to="/" className={classes.link}>
        {" "}
        <h1>start shopping now!</h1>
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          SubTotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
            component={Link}
            to="/CheckOut"
          >
            CheckOut
          </Button>
        </div>
      </div>
    </>
  );
  if (!cart.line_items) return "loading...";

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} gutterBottom variant="h3">
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
}
