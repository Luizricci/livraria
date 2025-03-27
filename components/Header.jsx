import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>📚 Livraria dos Cria</h1>
            <p>Onde as resenhas viram vidas!</p>
        </header>
    );
}