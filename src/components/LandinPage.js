import React from "react";

import {
  Container,
  Grid,
  Typography,
  Button,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const moods = [
  "CHEERFUL",
  "REFLECTIVE",
  "GLOOMY",
  "HUMOROUS",
  "IDYLLIC",
  "CHILL",
  "ROMANTIC",
  "MELANCHOLY",
  "WEIRD",
  "HORNY",
  "SLEEPY",
  "ANGRY",
  "FEARFUL",
  "LONELY",
  "TENSE",
  "THOUGHTFUL",
  "THRILL-SEEKING",
  "PLAYFUL",
];

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <div style={{ paddingTop: "25px" }}>
        {" "}
        <Container maxWidth="md" style={{}}>
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
            </Toolbar>
          </AppBar>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
              alignItems: "center",
            }}
          >
            <div style={{}}>
              <Typography
                align="center"
                style={{
                  fontFamily: "Sans-Serif",
                  fontWeight: "bold",
                  fontSize: "3.5rem",
                  color: "white",
                }}
              >
                Discover top-rated movies based on your mood
              </Typography>
              <Typography
                variant="h6"
                align="center"
                style={{ color: "white" }}
              >
                How are you feeling now?
              </Typography>
            </div>
            <div className={classes.groot}>
              <Grid container spacing={2}>
                {moods.map((mood, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                    <Button
                      variant="contained"
                      size="medium"
                      color="primary"
                      className={classes.button}
                      style={{
                        backgroundColor: "#e50914",
                        boxShadow:
                          "0px 2px 4px -1px rgb(37 216 136), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
                      }}
                    >
                      {mood}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </div>
            <div style={{ marginTop: "30px" }}>
              {" "}
              <Typography
                align="center"
                style={{
                  fontFamily: "Sans-Serif",
                  // fontWeight: "bold",
                  fontSize: "1rem",
                  color: "white",
                }}
              >
                Made with 🍺 by Nitish
              </Typography>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;