import React from "react";
import { BookIcon } from "../Icons/Book";
import { MedalIcon } from "../Icons/Medal";
import { RocketIcon } from "../Icons/Rocket";
import { UsersIcon } from "../Icons/Users";
import styles from "./reasoncard.module.css";

export interface ReasonCardProps {
  title: string;
  description: string;
  icon: "rocket" | "book" | "medal" | "users";
}

export function ReasonCard({ title, description, icon }: ReasonCardProps) {
  function renderIcon() {
    const icons = {
      rocket: <RocketIcon />,
      book: <BookIcon />,
      medal: <MedalIcon />,
      users: <UsersIcon />,
    };

    return icons[icon] || null;
  }

  return (
    <div className={styles.reasonCard}>
      <div className={styles.reasonIcon}>{renderIcon()}</div>
      <div className={styles.reasonContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
