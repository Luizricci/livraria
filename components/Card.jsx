import styles from "../styles/Card.module.css";

export default function Card() {
  return (
    <section >
      <div className={styles.card}>
        <div>
          <img src="/image.png" alt="" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h3>nome do livro</h3>
          <p>escritora</p>
          <div className={styles.cardFooter}>
            <p>valor</p>
            <button>Comprar</button>
          </div>
        </div>
      </div>
    </section>
  );
}
