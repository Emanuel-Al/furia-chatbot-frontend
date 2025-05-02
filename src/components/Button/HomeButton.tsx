import { Button } from "@mui/material";
import React from "react";

interface HomeButtonProps {
  text: string;
  backgroundColor: "black" | "white";
  color: "black" | "white";
  onClick: () => void;
}

const HomeButton: React.FC<HomeButtonProps> = ({
  text,
  backgroundColor,
  color,
  onClick,
}) => {
  return (
    <div>
      <Button
        onClick={onClick}
        fullWidth
        variant="contained"
        type="submit"
        sx={{
          backgroundColor,
          color,
          border: `1px solid ${color}`,
          transition: "all 0.3s ease",
          "&:hover": {
            opacity: 0.9,
          },
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default HomeButton;
