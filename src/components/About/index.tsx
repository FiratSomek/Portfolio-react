import { Typography } from "@mui/material";
import "./styles.css";

export const About = () => {
  return (
    <div className="about-container ">
      <div>
        <Typography variant="h4">About Me</Typography>
      </div>
      <div className="about-info">
        <Typography variant="body1">
          My name is Fırat and I am a talented front end developer. Actually ı
          have been graduated from aviation management department. But ı have
          always been interest with internet and technology. In my free time, I
          enjoy listening to music and hiking, that it helps to relax and
          inspire me in my work. I initially started coding as a hobby, but
          quickly realized that it was something I was truly passionate about
          and decided to pursue a career change. I am so excited to will gain
          new experiences and help others in the process.
        </Typography>
      </div>
    </div>
  );
};
