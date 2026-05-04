import { useState} from "react";
function Article({ title, date, preview }) {
  const displayDate = date 

  return (
    <article>
      <h3>{title}</h3>
      <small>{displayDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;