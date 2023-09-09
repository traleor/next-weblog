import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <h1>Hello</h1>
      <h2>Hi there</h2>
      <h3>Let&apos;s Go</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        similique recusandae vel deserunt! Delectus, provident illo. Excepturi
        facere, non impedit ex iusto pariatur dolore distinctio, quod facilis,
        id accusantium provident.
      </p>
    </div>
  );
}
