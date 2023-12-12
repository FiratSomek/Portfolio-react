import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Fab } from "@mui/material";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  return visible ? (
    <Fab
      onClick={scrollToTop}
      className={"scroll-button"}
      size="medium"
      color="inherit"
      sx={{ position: "fixed", bottom: 20, left: 20 }}
    >
      <FaArrowCircleUp />
    </Fab>
  ) : null;
};

export default ScrollButton;
