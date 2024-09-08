import styles from "./card.module.css";

interface Props {
  description: {
    title: string;
    content: string;
  }[];
}

export function Card({ description }: Props) {
  return (
    <div className={styles.card}>
      <ul>
        {description.map((data, dataIndex) => (
          <li key={dataIndex}>
            <h4>{data.title}</h4>
            <p>{data.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
