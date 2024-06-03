import React from "react";

import {
  Container,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useNavigate } from "react-router-dom";

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
  "Thrill",
  "Playful",
  "Humorous",
  "Gritty",
  "Thoughtful",
  "Reflective",
  "Cheerful",
  "Idyllic",
];
const moodToGenreMap = {
  "Thrill": "action",
  Advanture: "action",
  Playful: "animation",
  Humorous: "comedy",
  Gritty: "crime",
  Thoughtful: "documentry",
  Reflective: "drama",
  Cheerful: "family",
  Idyllic: "western",
};

const LandingPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleOnClick = async (mood) => {
    try {
      const genre = moodToGenreMap[mood];
      navigate(`/movies/${mood}`, { state: { genre: genre } });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div style={{ paddingTop: "25px" }}>
        {" "}
        <Container maxWidth="md">
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
                Explore the finest webseries tailored to match your current
                vibe.
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
                  <Grid item xs={6} sm={6} md={4} lg={3} xl={2} key={index}>
                    <Button
                      variant="contained"
                      size="medium"
                      color="primary"
                      className={classes.button}
                      onClick={() => handleOnClick(mood)}
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
          </div>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
