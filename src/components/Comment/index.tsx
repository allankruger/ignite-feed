import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import styles from "./styles.module.css";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLike() {
    setLikeCount(likeCount + 1);
  }

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

            <button title="Delete comment" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLike}>
            <ThumbsUp size={20} />
            Like <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
