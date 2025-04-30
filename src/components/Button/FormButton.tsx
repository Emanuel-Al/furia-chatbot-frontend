import { Button } from "@mui/material";
import React from "react";

interface FormButtonProps {
  text: string;
}

const FormButton: React.FC<FormButtonProps> = ({ text }) => {
  return (
    <div>
      <Button
        fullWidth
        variant="contained"
        type="submit"
        sx={{ backgroundColor: "black", borderRadius: 5 }}
      >
        {text}
      </Button>
    </div>
  );
};

export default FormButton;
