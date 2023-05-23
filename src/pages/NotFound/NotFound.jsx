import styles from "./NotFound.module.scss";

function NotFound() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Not Found</h1>
      <a href="/">
        <button className={styles.btn}>Назад</button>
      </a>
    </div>
  );
}

export default NotFound;
