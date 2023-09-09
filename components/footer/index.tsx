import Link from "next/link";
import React from "react";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.component}>
        <div>
          <div className={styles.head}>
            <h2>
              Academy<span>Omen</span>
            </h2>
          </div>
          <div>
            <h4>
              We help you to find the best events in your city. We are here to
              help you to find the best events in your city.
            </h4>
          </div>
        </div>

        <div>
          <div className={styles.head}>
            <h2>About</h2>
          </div>
          <div className={styles.content}>
            <Link href="/">Product</Link>
            <Link href="/">Resource</Link>
            <Link href="/">Terms and Conditions</Link>
            <Link href="/">FAQ</Link>
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
            <h4>+012 3456789</h4>
            <h4>peng@traleor.com</h4>
          </div>
        </div>
      </div>
      <div className={styles.mark}>
        <h4>
          <Link href="https://traleor.com/" target="_blank">
            Powered By Traleor
          </Link>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
