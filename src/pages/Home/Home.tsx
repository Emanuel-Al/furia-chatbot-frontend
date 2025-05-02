import HomeButton from "../../components/Button/HomeButton";
import styles from "./Home.module.css";
import FuriaLogo from "../../assets/Furia_Esports_logo.svg";
import FuriaBanner from "../../assets/FuriaBanner.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img
            src={FuriaLogo}
            alt="Logo da FURIA Esports"
            className={styles.furiaLogo}
          />
          <h2 className={styles.title}>Fúria Esports Chatbot</h2>
        </div>

        <nav className={styles.navBar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <HomeButton
                text="Login"
                backgroundColor="white"
                color="black"
                onClick={() => navigate("/login")}
              />
            </li>
            <li className={styles.navItem}>
              <HomeButton
                text="Register"
                backgroundColor="black"
                color="white"
                onClick={() => navigate("/register")}
              />
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className={`${styles.section} ${styles.darkSection}`}>
          <div className={styles.mainContent}>
            <div className={styles.description}>
              <h1>Conheça o novo e poderoso chatbot da Fúria</h1>
              <p>
                Pergunte sobre os próximos jogos, informações sobre jogadores e
                muito mais!
              </p>
            </div>
            <div className={styles.image}>
              <img
                src={FuriaBanner}
                alt="Banner da Fúria"
                className={styles.furiaBanner}
              />
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.lightSection}`}>
          <div className={styles.features}>
            <h2>Recursos do Chatbot</h2>
            <ul>
              <li>⚡ Respostas rápidas e precisas</li>
              <li>🧠 Treinado com uma vasta base de conhecimento</li>
              <li>🎮 Detalhes sobre jogadores e partidas</li>
            </ul>
          </div>
        </section>

        <section className={`${styles.section} ${styles.darkSection}`}>
          <div className={styles.summary}>
            <h2>Resumo</h2>
            <p>
              Essa aplicação foi feita para conectar fãs com o universo da Fúria
              Esports por meio de um chatBot. Tudo isso com uma interface
              simples, moderna e intuitiva.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
