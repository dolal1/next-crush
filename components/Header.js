import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>Dev</span> News
      </h1>
      <p className={styles.description}>Get the newest Dev News</p>
    </div>
  );
};

export default Header;
