import Header from "../components/Header";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import ComponentesPopulares from "../components/ComponentesPopulares";
import FooterColumn from "../components/FooterColumn";


export default function Home() {
  const categorias = [
    { link: "/ficcao", image: "🚀", text: "Ficção Científica" },
    { link: "/romance", image: "❤️", text: "Romance" },
    { link: "/biografia", image: "👤", text: "Biografia" },
    { link: "/tecnologia", image: "💻", text: "Tecnologia" },
    { link: "/fantasia", image: "🔮", text: "Fantasia" },
    { link: "/historia", image: "📜", text: "História" },
    { link: "/autoajuda", image: "🌱", text: "Autoajuda" },
  ];
  return (
    <div >
      <Header />
      <main className={styles.container}>
        <div className={styles.cardContainer}>

            <div className={styles.headerContainer}>
              <h2>Destaques da Semana</h2>
            </div>
          <div className={styles.cardLancamento}>
          <Card imagem={"/image-livro01.png"} nome={"ah, Não! Um livro nao "} escritora={"Stéphanie"} valor={"R$ 24,99"}/>
          <Card imagem={"/image-livro02.png"} nome={"O pequeno Príncipe"} escritora={"Antoine de Saint-Exupéry"} valor={"R$ 25.50"}/>
          <Card imagem={"/image-livro03.png"} nome={"O menino maluquinho"} escritora={"Ziraldo Alves Pinto"} valor={"R$ 23,59"}/>
          </div>
        </div>
        <div className={styles.cardCategoria}>
          <div className={styles.headerCategoria}>
            <h2>Categorias Populares</h2>
            <a href="/categorias">Ver todas</a>
          </div>
          <div className={styles.categorias}>
            {categorias.map((categoria, index) => (
              <ComponentesPopulares
                key={index}
                link={categoria.link}
                image={categoria.image}
                text={categoria.text}
              />
            ))}
          </div>
        </div>

   
        
        <div className={styles.cardContainer}>
        <div className={styles.headerContainer}>
            <h2>Lançamentos</h2>
          </div>

          <div className={styles.cardLancamento}>
          <Card imagem={"/image-livro04.png"} nome={"Perigoso"} escritora={"Tim Warnesum"} valor={"R$ 33,46"}/>
          <Card imagem={"/image-livro05.png"} nome={"O homem que amava caixas"} escritora={"Stephen Michael King"} valor={"R$ 29.90"}/>
          <Card imagem={"/image-livro06.png"} nome={"Diário de um banana - Batalha Neval"} escritora={"Jeff Kinney"} valor={"R$ 37,80"}/>
          </div>
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
