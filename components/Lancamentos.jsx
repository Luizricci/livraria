import styles from "../styles/Lancamentos.module.css";

export default function Card({nome, escritora, valor, imagem}) {
  return (
    <section >
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={imagem} alt="" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{nome}</h3>
          <p className={styles.subTitle}>{escritora}</p>
          <div className={styles.cardFooter}>
            <p className={styles.price}>{valor}</p>
            <button>Comprar</button>

          </div>
        </div>
      </div>
    </section>
  );
}