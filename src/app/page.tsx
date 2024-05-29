import CardList from "@/components/CardList/CardList";
import styles from "./page.module.css";


const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <p>soy el body wii</p>
      <CardList />
    </main>
  );
};

export default Home;