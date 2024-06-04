// Footer.js
import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <Typography
        align="center"
        style={{
          fontFamily: "Sans-Serif",
          fontSize: "1rem",
          color: "white",
        }}
      >
        Made with 🍹 by Nitish
      </Typography>
    </div>
  );
};

export default Footer;
