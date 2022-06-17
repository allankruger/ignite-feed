import { Comment } from "../Comment";
import styles from "./styles.module.css";

export function Post(props) {
  const { author, content } = props;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/allankruger.png"
          />
          <div className={styles.authorInfo}>
            <strong>Allan Krüger</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="May 5th at 8:13AM" dateTime="2022-05-11 08:13:30">
          Published 1h ago
        </time>
      </header>

      <div className={styles.content}>
        <p>Hey guys 👋</p>
        <p>
          Just uploaded another project to my portfolio. It's a project I made
          during the NLW Return, a Rocketseat event. The project name is
          DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#newproject</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>
        <textarea placeholder="Leave a comment" />
        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
