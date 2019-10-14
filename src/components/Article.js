import React from "react";

const Article = ({ title, author, text }) => {
  // const { title, author, text } = props;  <-- same thing if given as a props argument
  return (
    <article>
      <h3>Title: {title} </h3>
      <span>Author: {author}</span>
      <p>{text}</p>
    </article>
  );
};

export default Article;
