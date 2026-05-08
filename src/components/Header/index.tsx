import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <a href="/">
      <img
        src="/logo/logo-text-only.webp"
        alt="Logo for Where's Wally"
        width="144px"
      />
    </a>
  </header>
);

export default Header;
