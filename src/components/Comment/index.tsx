import { format, formatDistanceToNow } from "date-fns";
import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import styles from "./styles.module.css";

interface CommentProps {
  content: string;
  publishedAt: Date;
  onDeleteComment: (comment: string) => void;
}

export function Comment({
  content,
  publishedAt,
  onDeleteComment,
}: CommentProps) {
  const [hasLiked, setHasLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const formattedPublishingDate = format(publishedAt, "LLL do h':'mmbbb");
  const publishingDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLike() {
    if (!hasLiked) {
      setLikeCount(likeCount + 1);
      setHasLiked(true);
    } else {
      setLikeCount(likeCount - 1);
      setHasLiked(false);
    }
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/allankruger.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.author}>
              <strong>Allan Krüger</strong>
              <time
                title={formattedPublishingDate}
                dateTime={publishedAt.toISOString()}
              >
                {publishingDateRelativeToNow}
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
