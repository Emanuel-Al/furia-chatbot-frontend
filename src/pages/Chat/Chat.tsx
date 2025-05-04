import React, { useState } from "react";
import styles from "./Chat.module.css";
import { FiSend } from "react-icons/fi";
import FuriaLogo from "../../assets/Furia_Esports_logo.svg";

type Message = {
  sender: "user" | "bot";
  content: string;
};

const Chat: React.FC = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      content: `Olá! Eu sou o chatBot da FÚRIA Esports. Me pergunte sobre partidas, jogadores, e mais!`,
    },
  ]);
  const [prompt, setPrompt] = useState("");

  const handleSend = async () => {
    if (!prompt.trim()) return;

    const newUserMessage: Message = { sender: "user", content: prompt };
    setMessages((prev) => [...prev, newUserMessage]);

    try {
      const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ prompt }),
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Erro detalhado:", errorText);
        throw new Error("Erro na API");
      }
      const data = await response.json();
      console.log("Resposta da api: ", data);
      const botResponse: Message = {
        sender: "bot",
        content: data.message || "Algo deu errado",
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", content: "Algo deu errado" },
      ]);
    }
    setPrompt("");
  };

  return (
    <div className={styles.chatContainer}>
      <header className={styles.chatHeader}>
        <div className={styles.logoContainer}>
          <img src={FuriaLogo} alt="Fúria Logo" className={styles.logo} />
          <h1 className={styles.title}>FÚRIA Chatbot</h1>
        </div>
      </header>

      <div className={styles.chatBody}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              msg.sender === "user" ? styles.user : styles.bot
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      <div className={styles.chatInput}>
        <input
          type="text"
          value={prompt}
          placeholder="Digite sua mensagem..."
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className={styles.inputField}
        />
        <button onClick={handleSend} className={styles.sendButton}>
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default Chat;
