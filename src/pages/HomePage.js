import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "A Brief History of Time",
    author: "Stephen W. Hawking",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore eius in quasi dolore sunt iure, at, mollitia sint rem qui nam earum molestiae aut, quas sit officiis blanditiis eos tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi sunt nemo minus deleniti, totam esse eius ipsa labore dolore accusamus, saepe doloribus ullam dolorem quasi nam quos id ab."
  },
  {
    id: 2,
    title: "Astrophysics for People in a Hurry",
    author: "Niel deGrasse Tyson",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore eius in quasi dolore sunt iure, at, mollitia sint rem qui nam earum molestiae aut, quas sit officiis blanditiis eos tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi sunt nemo minus deleniti, totam esse eius ipsa labore dolore accusamus, saepe doloribus ullam dolorem quasi nam quos id ab."
  }
];

const HomePage = () => {
  const articleList = articles.map(article => (
    <Article key={article.id} {...article} /> // {...artilce} === props
  ));
  return <div className="home">{articleList}</div>;
};

export default HomePage;
