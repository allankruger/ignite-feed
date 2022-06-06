import { Pencil } from "phosphor-react";
import styles from "./styles.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/allankruger.png"
        />
        <strong>Allan Krüger</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a className={styles.button} href="#">
          <Pencil size={20}/>
          Edit profile
        </a>
      </footer>
    </aside>
  );
}
