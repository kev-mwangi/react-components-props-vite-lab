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
      title: "Learning React",
      date: "May 4, 2026",
      preview: "React makes it easy to build user interfaces..."
    },
    {
      id: 2,
      title: "Understanding Components",
      date: "May 3, 2026",
      preview: "Components help break the UI into reusable pieces..."
    }
  ];

  return (
  <div>
    <Header name = "Personal Blog" />
    <About image = "https://images.unsplash.com/photo-1544907800-b98ac42cd27d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9nbyUyMG9mJTIwYmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
           about = "Welcome to my blog i specifically write about development! "
    />
    <ArticleList posts = {posts}/>
  </div>
  );
}

export default App;
