import React from "react";
import { Typography, AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation, useNavigate } from "react-router-dom";

// Popcorn emoji component with click handler
const EmojiIcon = ({ onClick }) => (
  <span 
    style={{ 
      fontSize: "1.5rem", 
      color: "white", 
      cursor: "pointer" // Add cursor pointer to indicate it's clickable
    }}
    onClick={onClick}
    role="button"
    aria-label="Go to home page"
  >
    🍹
  </span>
);

const useStyles = makeStyles((theme) => ({
  appBarContainer: {
    width: "100%",
    backgroundColor: "#1a1a25",
    display: "flex",
    justifyContent: "center"
  },
  appBar: {
    backgroundColor: "#4756b3",
    boxShadow: "none",
    padding: 0,
    borderRadius: "30px",
    margin: "10px auto",
    maxWidth: "600px", // Fixed width
    height: "60px",
    overflow: "hidden" // Prevent content from overflowing
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "60px", 
    padding: "0 20px",
    width: "100%",
  },
  title: {
    fontWeight: "600",
    fontSize: "1.2rem",
    fontFamily: "Arial, Sans-Serif",
    color: "white",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    width: "50px",
    minWidth: "40px",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "120px",
    paddingRight: "35px", // Ensure button doesn't touch the edge
  },
  button: {
    backgroundColor: "#1d1d2b",
    color: "white",
    padding: "6px 12px", // Slightly smaller padding
    borderRadius: "6px",
    textTransform: "none",
    fontWeight: "500",
    fontSize: "0.85rem", // Slightly smaller font
    "&:hover": {
      backgroundColor: "#2c2c3a",
    },
    maxWidth: "110px", // Ensure button doesn't exceed container
    whiteSpace: "nowrap"
  },
  emptySpace: {
    width: "120px",
  }
}));

const Header = () => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  const handleChangeVibe = () => {
    navigate("/");
  };
  
  // Function to handle emoji click - navigate to home page
  const handleEmojiClick = () => {
    navigate("/");
  };

  const isMoodPage = location.pathname.startsWith("/movies/");

  return (
    <div className={classes.appBarContainer}>
      <AppBar position="static" className={classes.appBar} elevation={0}>
        <Toolbar className={classes.toolbar}>
          {/* Left side - Icon */}
          <div className={classes.iconContainer}>
            <EmojiIcon onClick={handleEmojiClick} />
          </div>
         
          {/* Middle - Title */}
          <div className={classes.titleContainer}>
            <Typography 
              className={classes.title}
              onClick={handleEmojiClick} // Make title clickable too (optional)
              style={{ cursor: "pointer" }} // Add cursor pointer to indicate it's clickable
            >
              Click4Netflik
            </Typography>
          </div>
         
          {/* Right side - Button or empty space */}
          <div className={classes.buttonContainer}>
            {isMoodPage ? (
              <Button
                variant="contained"
                size="small"
                className={classes.button}
                onClick={handleChangeVibe}
                disableElevation
              >
                Change Vibe
              </Button>
            ) : (
              <div className={classes.emptySpace} />
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
