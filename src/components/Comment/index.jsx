import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";
import styles from "./styles.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/allankruger.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.author}>
              <strong>Allan Krüger</strong>
              <time title="May 5th at 8:13AM" dateTime="2022-05-11 08:13:30">
                Near 1h ago
              </time>
            </div>

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>Great job! Congrats!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
