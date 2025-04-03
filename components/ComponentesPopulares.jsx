import styles from "../styles/ComponentesPopulares.module.css";

export default function ComponentesPopulares({ link, image, text }) {
  return (
    <a href={link} className={styles.categoriaCard}>
      <span>{image}</span>
      <p>{text}</p>
    </a>
  );
}