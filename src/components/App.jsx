import React from "react";
//import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";
//console.log(blogData);

function App() {
   const posts = [
    {
      id: 1,
      title: "First Post",
      date: "May 4, 2026",
      preview: "This is the first post"
    }
  ];
  return (
  <div>
    <Header name = "Personal Blog" />
    <About about = "Welcome to my blog i specifically write about development! "/>
    <ArticleList posts={posts} />
  </div>
  );
}

export default App;
