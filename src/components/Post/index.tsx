import { format, formatDistanceToNow } from "date-fns";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./styles.module.css";

export interface PostProps {
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  publishedAt: Date;
  content: { type: "paragraph" | "hyperlink"; content: string }[];
}

const commentsArray = [
  {
    id: uuidv4(),
    publishedAt: new Date("2022-05-03 20:00:00"),
    content:
      "This comment is set inside the state, that's why it is always here.",
  },
];

export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState(commentsArray);
  const [newCommentText, setNewCommentText] = useState("");

  const formattedPublishingDate = format(publishedAt, "LLL do h':'mmbbb");
  const publishingDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    const date = new Date(Date.now());
    setComments([
      ...comments,
      { id: uuidv4(), publishedAt: date, content: newCommentText },
    ]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete: string) {
    const newComments = comments.filter((comment) => {
      return comment.id !== commentToDelete;
    });

    setComments(newComments);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
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
            return <p key={uuidv4()}>{line.content}</p>;
          } else if (line.type === "hyperlink") {
            return (
              <p key={uuidv4()}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Leave your feedback</strong>
        <textarea
          placeholder="Leave a comment"
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Comment
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              content={comment.content}
              onDeleteComment={deleteComment}
              publishedAt={comment.publishedAt}
            />
          );
        })}
      </div>
    </article>
  );
}
