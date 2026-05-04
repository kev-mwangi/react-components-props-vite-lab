import { useState } from "react";
function About({ image, about }) {
  const defaultImage = "https://via.placeholder.com/150";

  return (
    <aside>
      <img src={image || defaultImage} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;