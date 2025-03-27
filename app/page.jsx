import Header from "../components/Header";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div >
      <Header />
      <main className={styles.container}>
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  );
}
