import React from 'react';
import { Link, Route } from 'react-router-dom';
import Form from "./Form/Form"
export default function OTW(){

return(
<div className = "OTW">
    <h1>Rafiki Pizza</h1>
    <h1>Congrats!! Pizza is on its Way!!! </h1>
    {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
    <iframe src="https://giphy.com/embed/9fuvOqZ8tbZOU" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/happiness-9fuvOqZ8tbZOU">via GIPHY</a></p>
</div>
)
}