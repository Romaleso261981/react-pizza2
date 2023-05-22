import styles from "./NotFound.module.scss";

function NotFound() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Not Found</h1>
      <button className={styles.btn}>Назад</button>
    </div>
  );
}

export default NotFound;
