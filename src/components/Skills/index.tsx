import "./styles.css";
import { Typography, List, ListItem } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import HandymanIcon from "@mui/icons-material/Handyman";

export const Skills = () => {
  return (
    <div className="skill-container">
      <div className="skill-title">
        <Typography variant="h3">Skills</Typography>
      </div>
      <div className="skill-info">
        <div>
          <Typography className="bottom-line" variant="h5">
            Technologies
          </Typography>
          <CodeIcon
            className="skill-icon"
            sx={{ width: "50px", height: "50px" }}
          />
          <List>
            <ListItem>JavaScript</ListItem>
            <ListItem>HTML</ListItem>
            <ListItem>Css</ListItem>
            <ListItem>React</ListItem>
            <ListItem>TypeScript</ListItem>
            <ListItem>Material UI</ListItem>
          </List>
        </div>
        <div>
          <Typography className="bottom-line" variant="h5">
            Tools
          </Typography>
          <HandymanIcon
            className="skill-icon"
            sx={{ width: "50px", height: "50px" }}
          />
          <List>
            <ListItem>GitHub</ListItem>
            <ListItem>Git</ListItem>
            <ListItem>VsCode</ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};
