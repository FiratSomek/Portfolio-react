import "./styles.css";
import { Link, Button } from "@mui/material";

export const Header = () => {
  return (
    <div className="header-container">
      <div>
        <h3>FIRATWEBDEV</h3>
      </div>
      <div>
        <nav>
          <Link
            className="link"
            href="#"
            underline="hover"
            margin="0 20px"
            color="inherit"
          >
            About Me
          </Link>
          <Link
            className="link"
            href="#"
            underline="hover"
            margin="0 20px"
            color="inherit"
          >
            Skills
          </Link>
          <Link
            className="link"
            href="#"
            underline="hover"
            margin="0 20px"
            color="inherit"
          >
            Projects
          </Link>
        </nav>
      </div>
      <div>
        <Button
          className="contact-btn"
          variant="outlined"
          size="medium"
          color="inherit"
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
};
