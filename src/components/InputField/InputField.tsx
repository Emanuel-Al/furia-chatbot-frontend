import React from "react";
import { TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  label: string;
  size?: "small" | "medium";
  name: string;
  register: UseFormRegister<any>;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  size = "small",
  name,
  register,
}) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <TextField
        label={label}
        size={size}
        variant="outlined"
        fullWidth
        {...register(name)}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
          },
        }}
      />
    </div>
  );
};

export default InputField;
