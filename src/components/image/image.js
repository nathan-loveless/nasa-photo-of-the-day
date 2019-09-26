import React from "react";

export default function Image(props)
{
    console.log(props.url);
    return (
        <><div className='image'>
            <img src={props.image}></img>
        </div></>
    );
}