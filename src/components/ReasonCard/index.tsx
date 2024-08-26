import { RocketIcon } from "../Icons/Rocket";
import styles from "./reasoncard.module.css";

export function ReasonCard() {
  return (
    <div className={styles.reasonCard}>
      <div className={styles.reasonIcon}>
        <RocketIcon />
      </div>
      <div className={styles.reasonContent}>
        <h3>Innovation</h3>
        <p>
          Buzzvel encourages its employees to think outside the box and explore
          new ideas.
        </p>
      </div>
    </div>
  );
}
