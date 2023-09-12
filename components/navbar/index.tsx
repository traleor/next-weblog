import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { LogoIcon, SearchIcon } from "..";

const Navbar = () => {
  return (
    <nav role="navigation" className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <LogoIcon width={50} height={50} />
        </Link>
        <form className={styles.search}>
          <input type="search" placeholder="Search tutorials " />
          <button aria-label="search" type="submit">
            <SearchIcon color="var(--tertiary)" />
          </button>
        </form>
      </div>

      <form className={`${styles.search} ${styles.only_mobile}`}>
        <input type="search" placeholder="Search tutorials " />
        <button aria-label="search" type="submit">
          <SearchIcon />
        </button>
      </form>
      <input type="checkbox" id="checkbox_toggle" className={styles.toggle} />
      <label htmlFor="checkbox_toggle" className={styles.hamburger}>
        &#9776;
      </label>
      <ul className={`${styles.menu}`}>
        <li>
          <Link href="/tutorials">Tutorials</Link>
        </li>
        <li>
          <Link href="/about" scroll={false}>
            About
          </Link>
        </li>
        <li>
          <button className="primary">Watch Tutorial</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
