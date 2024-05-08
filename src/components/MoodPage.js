import React, { useState } from "react";

import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Grid,
} from "@material-ui/core";
import { Card, CardMedia, CardContent, Chip, Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import MovieIcon from "@material-ui/icons/Movie";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

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
  const location = useLocation();
  const [seriesData, setSeriesData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const genre = location.state?.genre;
    if (genre) {
      axios
        .get(`http://localhost:8000/netflix?genre=${genre}`)
        .then((response) => {
          console.log(response.data);
          setSeriesData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  console.log("lskjflskdjf", seriesData);
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % seriesData.length);
  };

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
            {seriesData.length > 0 && (
              <div>
                <Card
                  className={classes.appBarContainer}
                  style={{ borderRadius: "15px" }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/13638D7D100FE3985B157CD2E81A51571C8A47C181F123510F19453B55654CD4/scale?width=1200&aspectRatio=1.78&format=webp"
                    alt={seriesData[currentIndex].original_name}
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
                      {seriesData[currentIndex].original_name}
                    </Typography>
                    <Box display="flex" flexWrap="wrap" my={2}>
                      {seriesData[currentIndex].genres.map((genre, index) => (
                        <Chip
                          key={index}
                          label={genre.name} // Use the name property of the genre object
                          variant="outlined"
                          size="small"
                          style={{
                            color: "white",
                            borderColor: "white",
                            marginRight: "5px", // Add some spacing between chips
                            marginBottom: "5px",
                          }}
                        />
                      ))}
                    </Box>
                    <Box display="flex" flexWrap="wrap" my={2}>
                      {seriesData[currentIndex].seasons.map((season, index) => (
                        <Chip
                          key={index}
                          label={season.name} // Use the name property of the season object
                          variant="outlined"
                          size="small"
                          style={{
                            color: "white",
                            borderColor: "red",
                            marginRight: "5px", // Add some spacing between chips
                            marginBottom: "5px",
                          }}
                        />
                      ))}
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
                      {seriesData[currentIndex].overview}
                    </Typography>
                    <Grid container spacing={2} justifyContent="space-between">
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
                        Prev
                      </Button>
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
                        onClick={handleNextClick}
                      >
                        Next
                      </Button>
                    </Grid>
                  </CardContent>
                </Card>
              </div>
            )}
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
