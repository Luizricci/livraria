import Header from "../components/Header";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div >
      <Header />
      <main className={styles.container}>
        <div className={styles.cardContainer}>
          <Card imagem={"/image-livro01.png"} nome={"ah, Não! Um livro nao "} escritora={"Stéphanie"} valor={"R$ 24,99"}/>
          <Card imagem={"/image-livro02.png"} nome={"O pequeno Príncipe"} escritora={"Antoine de Saint-Exupéry"} valor={"R$ 25.50"}/>
          <Card imagem={"/image-livro03.png"} nome={"O menino maluquinho"} escritora={"Ziraldo Alves Pinto"} valor={"R$ 23,59"}/>
        </div>
        <div>
          <h2>aqui voce coloca o proximo container</h2>
        </div>
      </main>
    </div>
  );
}
