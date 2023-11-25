import "./styles.css";
import { Link, Typography } from "@mui/material";

// interface IntroduceProps {}

export const Introduce = () => {
  return (
    <div className="introduce-container">
      {/* <div className="int-img">
        <img src={ImageName} alt="" />
      </div> */}
      <div className="int-info">
        <Typography variant="h4">Hi there, I'm Fırat</Typography>
        <Typography variant="body1">
          I'm a Front End Developer in Türkiye
        </Typography>
        <Link className="link" href="#" underline="hover">
          Learn more
        </Link>
      </div>
    </div>
  );
};
