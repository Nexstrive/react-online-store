import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Home from "@material-ui/icons/Home";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cartButton: {
    marginRight: theme.spacing(2),
    color: "white",
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.cartButton}
              color="inherit"
              aria-label="menu"
            >
              <Home />
            </IconButton>
          </Link>
          <Link to="/cart">
            <IconButton
              edge="start"
              className={classes.cartButton}
              color="inherit"
              aria-label="menu"
            >
              <ShoppingCart />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
