import Link from "next/link";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.component}>
        <div>
          <div className={styles.head}>
            <h2>Academy Omen</h2>
          </div>
          <div>
            <h3>
              Join us on a quest for excellence with our world-class tutorials.
              Elevate your software engineering skills and open new doors of
              opportunity.
            </h3>
          </div>
        </div>

        <div>
          <div className={styles.head}>
            <h2>About</h2>
          </div>
          <div className={styles.content}>
            <Link href="/">Tutorials</Link>
            <Link href="/">Resources</Link>
            <Link href="/">Channel</Link>
          </div>
        </div>

        <div>
          <div className={styles.head}>
            <h2>Company</h2>
          </div>
          <div className={styles.content}>
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>

        <div>
          <div className={styles.head}>
            <h2>Contact</h2>
          </div>
          <div className={styles.content}>
            <h3>+012 XXXXXXXXX</h3>
            <h3>peng@traleor.com</h3>
          </div>
        </div>
      </div>
      <div className={styles.mark}>
        <h3>
          <Link href="https://traleor.com/" target="_blank">
            Powered By Traleor CMS (& Wagtail)
          </Link>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
