import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>

            <div className={styles.logo}>
            <h1>📚 Livraria dos Cria</h1>
            <p>Onde as resenhas viram vidas!</p>
            </div>

            <div className={styles.links}>
                <a href="/inicio">Início</a>
                <a href="/livros">Livros</a>
                <a href="/categorias">Categorias</a>
                <a href="/autores">Autores</a>
                <a href="/ofertas">Ofertas</a>
            </div>

            <div className={styles.pesquisa}>
                <div className={styles.inputPesquisa}>
                <input type="text" placeholder="Buscar livros, autores..." />
                <span className={styles.icon}>🔍</span>
                </div>
            
            </div>
        </header>
    );
}