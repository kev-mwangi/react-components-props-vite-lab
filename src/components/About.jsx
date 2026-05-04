import { useState } from "react";
function About({ image, about }) {
  const defaultImage = "https://images.unsplash.com/photo-1544907800-b98ac42cd27d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9nbyUyMG9mJTIwYmxvZ3xlbnwwfHwwfHx8MA%3D%3D";

  return (
    <aside>
      <img src={image || defaultImage} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;