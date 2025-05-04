import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../InputField/InputField";
import styles from "./LoginForm.module.css";
import FormButton from "../Button/FormButton";
import FuriaLogo from "../../assets/Furia_Esports_logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const loginSchema = z.object({
  email: z.string().email("Insira um email válido"),
  password: z
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .max(15, "A senha deve ter no máximo 15 caracteres"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  async function handleLoginSubmit(data: LoginFormData) {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Falha na autenticação");
      }

      const result = await response.json();
      console.log("Token recebido:", result.token);
      localStorage.setItem("token", result.token.token);
      toast.success("Login realizado com sucesso");
      navigate("/chat");
    } catch (error) {
      console.error("Erro ao autenticar:", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleLoginSubmit)} className={styles.form}>
        <div className={styles.header}>
          <img src={FuriaLogo} alt="Fúria Logo" className={styles.furiaLogo} />
          <h2 className={styles.title}>Bem-vindo ao Fúria Chatbot</h2>
        </div>

        <div className={styles.inputBox}>
          <div className={styles.inputArea}>
            <InputField
              type="text"
              label="Email"
              size="small"
              name="email"
              register={register}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>

          <div className={styles.inputArea}>
            <InputField
              type="password"
              label="Password"
              size="small"
              name="password"
              register={register}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
          </div>
        </div>
        <FormButton text="Login" />
        <div className={styles.footer}>
          <h4 className={styles.footerText}>
            Não possui conta?{" "}
            <Link to="/register" className={styles.link}>
              Cadastre-se
            </Link>
          </h4>
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default LoginForm;
