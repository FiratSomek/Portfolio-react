import "./styles.css";
import { Typography, Card, CardMedia, Link } from "@mui/material";
import { useState } from "react";
import RandomUserImg from "../../assets/random-user.png";
import RecipeAppImg from "../../assets/recipe-app.png";
import SpendMoneyAppImg from "../../assets/spend-money-app.png";
import TicTacToeImg from "../../assets/tic-tac-toe.png";

interface Project {
  name: string;
  url: string;
  img: string;
}
const initialProject: Project[] = [
  {
    name: "Recipe React",
    url: "https://recipe-app-phi-sage.vercel.app/",
    img: RecipeAppImg,
  },
  {
    name: "Spend Money React",
    url: "https://spend-money-app-orpin.vercel.app/",
    img: SpendMoneyAppImg,
  },
  {
    name: "Random Person React",
    url: "https://random-person-card.vercel.app/",
    img: RandomUserImg,
  },
  {
    name: "Tic Tac Toe React",
    url: "https://tic-tac-toe-react-psi-blush.vercel.app",
    img: TicTacToeImg,
  },
];

export const MyProjects = () => {
  const [projects, setProjects] = useState<Project[]>(initialProject);
  return (
    <div className="project-container">
      <div>
        <Typography variant="h4">Projects</Typography>
      </div>
      <div className="card-body-1">
        {projects.map((project) => (
          <Link href={project.url} underline="none" target="_blank">
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "20px",
                maxWidth: "250px",
                minWidth: "200px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                alt={project.name}
                height="140"
                image={project.img}
                title={project.name}
                sx={{ height: 140 }}
              />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
