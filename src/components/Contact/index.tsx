import "./styles.css";
import { Typography, Stack, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Contact = () => {
  const handleEmailClick = () => {
    window.open("mailto:frtsmk1996@gmail.com");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/f%C4%B1rat-s%C3%B6mek-6a8094250/");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/FiratSomek?tab=repositories");
  };

  return (
    <div className="contact-container">
      <div>
        <Typography variant="h4">Contact</Typography>
      </div>
      <div>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={6}
        >
          <Button
            variant="contained"
            color="success"
            sx={{
              height: "50px",
              width: "150px",
            }}
            startIcon={
              <EmailIcon
                sx={{
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  padding: "5px",
                  marginRight: "5px",
                }}
              />
            }
            onClick={handleEmailClick}
          >
            Email
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{
              height: "50px",
              width: "150px",
            }}
            startIcon={
              <LinkedInIcon
                sx={{
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  padding: "5px",
                  marginRight: "5px",
                }}
              />
            }
            onClick={handleLinkedInClick}
          >
            LinkedIn
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{
              height: "50px",
              width: "150px",
            }}
            startIcon={
              <GitHubIcon
                sx={{
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  padding: "5px",
                  marginRight: "5px",
                }}
              />
            }
            onClick={handleGitHubClick}
          >
            GitHub
          </Button>
        </Stack>
      </div>
    </div>
  );
};
