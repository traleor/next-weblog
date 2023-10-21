import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <nav role="navigation" className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
        </Link>
      </div>

      <div className={styles.search}>
        <input type="search" placeholder="Search tutorials " />
        <button aria-label="search" type="submit">
          <i className="fas fa-search" aria-hidden="true"></i>
        </button>
      </div>
      <input type="checkbox" id="checkbox_toggle" className={styles.toggle} />
      <label htmlFor="checkbox_toggle" className={styles.hamburger}>
        &#9776;
      </label>
      <ul className={`${styles.menu}`}>
        <li>
          <Link href="/blog">Tutorials</Link>
        </li>
        <li>
          <Link href="/about" scroll={false}>
            About Us
          </Link>
        </li>
        <li>
          <Link href="https://youtu.be/3Gidb2Zh_V4" target="_blank" passHref>
            <button aria-label="Watch Tutorial" className="primary">
              Watch Tutorial
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
