import Header from "../components/Header";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import FooterColumn from "../components/FooterColumn";


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
      <footer className={styles.footer}>
        <div className={styles.footerMain}>
          <FooterColumn
            title={"Links Rápidos"}
            texts={[
              {text: "Home"}, 
              {text: "Catalogo"}, 
              {text: "Sobre Nós"}, 
              {text: "Contato"}
            ]}
          />
          <FooterColumn
            title={"Categorias"}
            texts={[
              {text: "Ficção Cientifica"},
              {text: "Romance"}, 
              {text: "Tecnologia"}, 
              {text: "Fantasia"}, 
              {text: "História"},
            ]}
          />
          <FooterColumn
              title="Redes Sociais"
              texts={[
                { text: "Instagram", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png" },
                { text: "TikTok", icon: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png" },
                { text: "Twitter", icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png" },
                { text: "YouTube", icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png" },
            ]}
          />
        </div>
      </footer>
    </div>
  );
}
