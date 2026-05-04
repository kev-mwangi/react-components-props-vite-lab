import { useState} from "react";
function Article({ title, date, preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "No date available"}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;