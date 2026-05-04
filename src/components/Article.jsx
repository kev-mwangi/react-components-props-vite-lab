import { useState} from "react";
function Article ({title, date, preview}){
return(
<article>
    <h1>{title}</h1>
    <small>{date}</small>
    <p>{preview}</p>
</article>
);
}
export default Article ;