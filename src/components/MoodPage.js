import React, { useState } from "react";

import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Card, CardContent, Chip, Box } from "@material-ui/core";
import YouTube from "react-youtube";

import { makeStyles } from "@material-ui/core/styles";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader"; // Import the new Loader

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
  loadingContainer: {
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1a1a",  // Dark background similar to the screenshot
  },
  moodText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    marginBottom: "30px",
    color: "white",
  },
}));

const MoodPage = () => {
  const classes = useStyles();
  const location = useLocation();
  const [seriesData, setSeriesData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [mood, setMood] = useState(location.state?.genre || "Humorous");

  useEffect(() => {
    const genre = location.state?.genre;
    if (genre) {
      setMood(genre);
      axios
        .get(`https://netflix-series-details-backend.vercel.app/netflix?genre=${genre}`)
        .then((response) => {
          setSeriesData(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    }
  },  [location.state?.genre]);

  if (isLoading) {
    return (
      <div className={classes.loadingContainer}>
        <div className={classes.moodText}>
          <Typography variant="h6">We're fetching the best movies to watch when you feel </Typography>
          <span role="img" aria-label="mood emoji">🤣</span>
          <Typography variant="h6">{mood}... Hold tight!</Typography>
        </div>
        <Loader />
        <div style={{ position: "fixed", bottom: "20px", width: "100%", textAlign: "center" }}>
          <Typography variant="body2" style={{ color: "#888" }}>
            Made with 🍿 by Marc
          </Typography>
        </div>
      </div>
    );
  }
  
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % seriesData.length);
  };
  
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? seriesData.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div style={{ paddingTop: "25px" }}>
        <Container
          maxWidth="md"
          style={{ display: "flex", flexDirection: "column", gap: "30px" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {seriesData.length > 0 && (
              <div>
                <Card
                  className={classes.appBarContainer}
                  style={{ borderRadius: "15px" }}
                >
                  <YouTube
                    videoId={seriesData[currentIndex].youtube_key}
                    opts={{
                      width: "100%",
                      height: "300px",
                      playerVars: {
                        autoplay: 0,
                      },
                    }}
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
                    <Typography
                      variant="h5"
                      component="div"
                      style={{ color: "white" }}
                    >
                      {seriesData[currentIndex].original_name}
                    </Typography>
                    <Box display="flex" flexWrap="wrap" my={2}>
                      {seriesData[currentIndex].genres.map(
                        (genre, index) => (
                          <Chip
                            key={index}
                            label={genre.name}
                            variant="outlined"
                            size="small"
                            style={{
                              color: "white",
                              borderColor: "white",
                              marginRight: "5px",
                              marginBottom: "5px",
                            }}
                          />
                        )
                      )}
                    </Box>
                    <Box display="flex" flexWrap="wrap" my={2}>
                      {seriesData[currentIndex].seasons.map(
                        (season, index) => (
                          <Chip
                            key={index}
                            label={season.name}
                            variant="outlined"
                            size="small"
                            style={{
                              color: "white",
                              borderColor: "red",
                              marginRight: "5px",
                              marginBottom: "5px",
                            }}
                          />
                        )
                      )}
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{ color: "white" }}
                      >
                        {seriesData[currentIndex].first_air_date}
                      </Typography>{" "}
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{ color: "white" }}
                      >
                        .
                      </Typography>{" "}
                      <Typography
                        variant="subtitle2"
                        sx={{ fontSize: "18px" }}
                        style={{ color: "yellow" }}
                      >
                        ★
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ paddingLeft: "5px" }}
                      >
                        {seriesData[currentIndex].imdbRating}
                      </Typography>
                    </Box>

                    <Typography variant="body1" component="p">
                      {seriesData[currentIndex].overview}
                    </Typography>
                    <Grid
                      container
                      spacing={2}
                      justifyContent="space-between"
                    >
                      <Button
                        variant="contained"
                        size="medium"
                        color="primary"
                        className={classes.button}
                        disabled={currentIndex === 0}
                        style={{
                          backgroundColor: "#e50914",
                          boxShadow:
                            "0px 2px 4px -1px rgb(37 216 136), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
                        }}
                        onClick={handlePrevClick}
                      >
                        Prev
                      </Button>
                      <Button
                        variant="contained"
                        size="medium"
                        color="primary"
                        className={classes.button}
                        disabled={currentIndex === seriesData.length - 1}
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
          </div>
        </Container>
      </div>
    </>
  );
};

export default MoodPage;
