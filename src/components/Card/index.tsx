import styles from "./card.module.css";

interface Props {
  title: string;
  description: string;
}

export function Card({ title, description }: Props) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
