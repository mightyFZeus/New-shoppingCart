import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./Styles";
import logo from '../../assets/logo.png'
import {Link, useLocation} from 'react-router-dom'

const NavBar = ({totalItems}) => {
  const classes = useStyles();
  const location = useLocation()

  
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="shopping-cart" height="25px" className={classes.img} />
            E-Commerce
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' &&(
          <div className={classes.button}>
            <IconButton aria-label="show cart items" component={Link} to='/Cart' color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>)}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
