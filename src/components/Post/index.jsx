import { format, formatDistanceToNow } from "date-fns";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./styles.module.css";

export function Post({ author, publishedAt, content }) {
  const formattedPublishingDate = format(publishedAt, "LLL do h':'mmbbb");
  const publishingDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/allankruger.png" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={formattedPublishingDate}
          dateTime={publishedAt.toISOString()}
        >
          {publishingDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "hyperlink") {
            return (
              <p>
                <a href="">{line.content}</a>
              </p>
            );
          }
        })}
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
