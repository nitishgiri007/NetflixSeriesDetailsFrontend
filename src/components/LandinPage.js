import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

// Emoji mapping for original moods
const moodEmojis = {
  "Thrill": "🤩", 
  "Playful": "😋",
  "Humorous": "🤣",
  "Gritty": "😠", 
  "Thoughtful": "🤔",
  "Reflective": "🤔",
  "Cheerful": "😄",
  "Idyllic": "😌",
};

const useStyles = makeStyles((theme) => ({
  root: {
    // minHeight: "vh",
    backgroundColor: "#1a1a25", // Dark background like in the screenshot
    color: "white",
    padding: theme.spacing(4, 0),
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  logo: {
    fontSize: "2rem",
    marginRight: theme.spacing(1),
  },
  title: {
    fontWeight: "bold",
    fontSize: "3rem",
    textAlign: "center",
    margin: theme.spacing(4, 0, 2),
  },
  subtitle: {
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  buttonContainer: {
    margin: "0 auto",
    maxWidth: "1000px",
  },
  moodButton: {
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #e50914",
    backgroundColor: "#1a1a25", // Dark background
    color: "white",
    padding: theme.spacing(1.5),
    marginBottom: theme.spacing(2),
    fontSize: "1rem",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#2c2c3a",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  emojiIcon: {
    marginRight: theme.spacing(1),
    fontSize: "1.2rem",
  }
}));

// Original moods from your code
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
    <div className={classes.root}>
      <Container maxWidth="lg">
        {/* <div className={classes.header}>
          <span className={classes.logo}>🍿</span>
          <Typography variant="h4" component="h1">
            Mood2Movie
          </Typography>
        </div> */}

        <Typography className={classes.title} variant="h1" component="h2">
          Explore the finest webseries tailored to match your current vibe.
        </Typography>

        <Typography className={classes.subtitle} variant="h5" component="h3">
          How are you feeling now?
        </Typography>

        <div className={classes.buttonContainer}>
          <Grid container spacing={2}>
            {moods.map((mood, index) => (
              <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
                <Button
                  className={classes.moodButton}
                  onClick={() => handleOnClick(mood)}
                >
                  <span className={classes.emojiIcon}>
                    {moodEmojis[mood] || "😊"}
                  </span>
                  {mood.toUpperCase()}
                </Button>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
