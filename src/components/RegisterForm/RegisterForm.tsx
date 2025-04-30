import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../InputField/InputField";
import FormButton from "../Button/FormButton";
import styles from "./RegisterForm.module.css";
import FuriaLogo from "../../assets/Furia_Esports_logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const registerSchema = z.object({
  name: z
    .string()
    .max(15, "O nome de usuário deve ter no máximo 15 caracteres"),
  email: z.string().email("Insira um email válido"),
  password: z
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .max(15, "A senha deve ter no máximo 15 caracteres"),
});

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  async function handleRegisterSubmit(data: RegisterFormData) {
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário");
      }
      toast.success("Usuário criado com sucesso");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      toast.error("Houve um erro ao criar usuário");
      console.log("Erro ao autenticar: ", error);
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleRegisterSubmit)}
        className={styles.form}
      >
        <div className={styles.header}>
          <img src={FuriaLogo} alt="Fúria Logo" className={styles.furiaLogo} />
          <h2 className={styles.title}>Junte-se a legião de furiosos!</h2>
        </div>
        <div className="inputBox">
          <div className="inputArea">
            <InputField
              label="Nome"
              size="small"
              name="name"
              register={register}
            />
            {errors.name && (
              <p className={styles.error}>{errors.name.message}</p>
            )}
          </div>
          <div className="inputArea">
            <InputField
              label="Email"
              size="small"
              name="email"
              register={register}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>
          <div className="inputArea">
            <InputField
              label="Senha"
              size="small"
              name="password"
              register={register}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
          </div>
          <div className="footer">
            <FormButton text="Registrar-se" />
            <h4 className={styles.footerText}>
              Já possui uma conta?{" "}
              <Link to="/login" className={styles.link}>
                Fazer Login
              </Link>
            </h4>
          </div>
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default RegisterForm;
