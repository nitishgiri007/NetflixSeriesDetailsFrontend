import React from "react";

import { Typography, AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom"; 
import MovieIcon from "@material-ui/icons/Movie";


const useStyles = makeStyles((theme) => ({
  appBarContainer: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  groot: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Header = () => {
  const classes = useStyles();
  const { genere } = useParams(); // Extract the genere parameter  
  const showChangeVibeButton = Boolean(genere); 
  
    console.log(showChangeVibeButton)
  return (
    <AppBar
      position="static"
      className={classes.appBarContainer}
      style={{
        borderRadius: "15px 65px",
        backgroundColor: "#e50914",
        boxShadow:
          "0px 2px 4px -1px rgb(37 216 136), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      }}
    >
      <Toolbar className={classes.toolbar}>
        <MovieIcon style={{ marginRight: "8px" }} />
        <div className={classes.grow} />
        <Typography
          variant="h6"
          style={{ fontWeight: "bold", fontFamily: "Sans-Serif" }}
        >
          Click4Netflik
        </Typography>
        <div className={classes.grow} />
        {showChangeVibeButton && ( 
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className={classes.button}
            style={{
              backgroundColor: "#20202a",
              boxShadow:
                "0px 2px 4px -1px rgb(37 216 136), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
            }}
          >
            Change Vibe
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
