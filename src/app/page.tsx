
import { useState } from "react";
import styles from "./page.module.css";
import Lista from "./lista";

export default function Home() {
  return (
    <div className={styles.page}>
      <title>Frameworks React JS</title>
      <Lista />
    </div>
  );
}
