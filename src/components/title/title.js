import React from "react";
import "../../components.css";

export default function Image(props)
{
    return (
        <><div className='title'>
            <h2>Title: {props.title}</h2>
        </div></>
    );
}