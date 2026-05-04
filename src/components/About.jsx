import { useState } from "react";
function About ({image , about}){
return(
<aside>
    <img src={image} alt="about logo" />
    <p>{about}</p>
</aside>
);
}
export default About ;