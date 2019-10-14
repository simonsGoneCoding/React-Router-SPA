import React from "react";

const Article = ({ title, author, text }) => {
  // const { title, author, text } = props;  <-- same thing if given as a props argument

  const styles = {
    marginTop: 40
  };
  return (
    <article style={styles}>
      <h3 style={{ marginBottom: 3, textTransform: "uppercase" }}>
        Title: {title}
      </h3>
      <span style={{ display: "block", marginBottom: 10, fontSize: 13 }}>
        Author: {author}
      </span>
      <p>{text}</p>
    </article>
  );
};

export default Article;
