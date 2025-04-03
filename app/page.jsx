import Header from "../components/Header";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import ComponentesPopulares from "../components/ComponentesPopulares";

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
          <Card imagem={"/image-livro01.png"} nome={"ah, Não! Um livro nao "} escritora={"Stéphanie"} valor={"R$ 24,99"}/>
          <Card imagem={"/image-livro02.png"} nome={"O pequeno Príncipe"} escritora={"Antoine de Saint-Exupéry"} valor={"R$ 25.50"}/>
          <Card imagem={"/image-livro03.png"} nome={"O menino maluquinho"} escritora={"Ziraldo Alves Pinto"} valor={"R$ 23,59"}/>
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
      </main>
    </div>
  );
}
