import styles from "../styles/FooterColumn.module.css";

export default function FooterColumn({ title, texts, icon }) {
    return (
        <div>
            <h3 className={styles.title}>{title}</h3>
            {texts.map((item, index) => (
                <p key={index} className={styles.text}>
                    {item.icon && <img src={item.icon} alt="icon" className={styles.icon} />}
                    {item.text}
                </p>
            ))}
        </div>
    );
}
