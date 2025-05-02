import React from "react";
import { TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  label: string;
  size?: "small" | "medium";
  name: string;
  type: "text" | "password";
  register: UseFormRegister<any>;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  size = "small",
  name,
  type,
  register,
}) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <TextField
        type={type}
        label={label}
        size={size}
        variant="outlined"
        fullWidth
        {...register(name)}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            color: "black",
            backgroundColor: "#f5f5f5",
          },
        }}
      />
    </div>
  );
};

export default InputField;
