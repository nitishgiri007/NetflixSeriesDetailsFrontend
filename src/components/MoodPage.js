import React from "react";

import { Container, Typography, AppBar, Toolbar } from "@material-ui/core";
import { Card, CardMedia, CardContent, Chip, Box } from "@material-ui/core";

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

const MoodPage = () => {
  const classes = useStyles();

  return (
    <>
      <div style={{ paddingTop: "25px" }}>
        {" "}
        <Container
          maxWidth="md"
          style={{ display: "flex", flexDirection: "column", gap: "30px" }}
        >
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
              gap: "20px",
            }}
          >
            <div>
              <Card
                className={classes.appBarContainer}
                style={{ borderRadius: "15px" }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/13638D7D100FE3985B157CD2E81A51571C8A47C181F123510F19453B55654CD4/scale?width=1200&aspectRatio=1.78&format=webp"
                  alt="The Lion King"
                />
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  <Typography variant="h5" component="div" style={{}}>
                    The Lion King
                  </Typography>
                  <Box display="flex" flexWrap="wrap" my={2} >
                    <Chip
                      label="Adventure"
                      variant="outlined"
                      size="small"
                      style={{
                        color: "white",
                        borderColor: "white",
                      }}
                    />

                    <Chip
                      label="Drama"
                      variant="outlined"
                      size="small"
                      style={{
                        color: "white",
                        borderColor: "white",
                      }}
                    />
                    <Chip
                      label="Animation"
                      variant="outlined"
                      size="small"
                      style={{
                        color: "white",
                        borderColor: "white",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ color: "white" }}
                  >
                    1994 · 1h 28min · &#9733; 8.5/10
                  </Typography>
                  <Typography variant="body1" component="p">
                    Lion prince Simba and his father are targeted by his bitter
                    uncle, who wants to ascend the throne himself.
                  </Typography>
                </CardContent>
              </Card>
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

export default MoodPage;
