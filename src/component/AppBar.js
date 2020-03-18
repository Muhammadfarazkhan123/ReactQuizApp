import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: 50
  },
  title: {
    flexGrow: 1
  }
};
class AppBarScreen extends Component {
  render() {
    const classes = useStyles;

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "green" }}>
          <Toolbar>
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" color="inherit" className={classes.title}>
              Quiz App
            </Typography>
            {/* <Button color="inherit" style={{ marginLeft: 1170 }}>
              Login
            </Button> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default AppBarScreen;
