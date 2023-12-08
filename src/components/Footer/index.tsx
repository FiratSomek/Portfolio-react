import { Typography } from "@mui/material";
import "./styles.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "70%",
          borderTop: "1px solid lightgrey",
          padding: "10px",
          fontSize: "10px",
        }}
        variant="inherit"
      >
        Copyright 2023 FıratWebDev. All rights reserved.
      </Typography>
    </div>
  );
};
