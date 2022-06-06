export function Post(props) {
  const { author, content } = props;

  return (
    <div>
      <strong>{author}</strong>
      <p>{content}</p>
    </div>
  );
}
