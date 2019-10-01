import React from "react";
import styled from 'styled-components';

const MyTitle = styled.div.attrs({
    className: 'title'
  })`
    background: skyblue;
    width: 100%;
  `;

export default function Title(props)
{
    return (
        <><MyTitle className='title'>
            <h2>Title: {props.title}</h2>
        </MyTitle></>
    );
}