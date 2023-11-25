import "./styles.css";
import { Typography, Card, Link } from "@mui/material";
import { useState } from "react";
import * as React from "react";

export const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  return (
    <div className="project-container">
      <div>
        <Typography variant="h4">Project</Typography>
      </div>
      <div>
        <Card></Card>
      </div>
    </div>
  );
};
