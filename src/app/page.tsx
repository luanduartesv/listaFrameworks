import Image from "next/image";
import styles from "./page.module.css";
import { Lista } from './lista';
import { AddFramework } from "./components/AddFramework"


export default function Home() {
  return (
    <div className={styles.page}>

        <Lista />
        
    </div>
  );
}
