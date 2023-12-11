import "./styles.css";
import { Typography } from "@mui/material";
import ProfileImg from "../../assets/profil.jpg";

export const Introduce = () => {
  return (
    <div className="introduce-container">
      <div className="int-img">
        <img src={ProfileImg} alt="#" />
      </div>
      <div className="int-info">
        <Typography variant="h4">Hi there, I'm Fırat</Typography>
        <Typography variant="body2">
          I am a software developer who is passionate about Front-End
          development. Web technologies, user interface design and modern web
          trends I am constantly improving my knowledge about it. Also, I am
          always open to learning and adapting to new technologies.
        </Typography>
        <Typography variant="body1">
          The languages and tools I use are as follows: HTML, CSS, JavaScript,
          React, Material UI, TypeScript
        </Typography>
      </div>
    </div>
  );
};
