import React from "react";
import "../../components.css";

export default function Description(props)
{
    return (
        <><div className='description'>
            <p>{props.desc}</p>
        </div></>
    );
}