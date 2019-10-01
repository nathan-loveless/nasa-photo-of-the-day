import React from "react";
import styled from 'styled-components';

const MyImage = styled.div.attrs({
    className: 'title'
  })`
    max-width: 100%;
  `;

  const ImgTag = styled.img`
    width: 100%;
    object-fit: contain;
  `;


export default function Image(props)
{
    console.log(props.url);
    return (
        <><MyImage className='image'>
            <ImgTag src={props.image}></ImgTag>
        </MyImage></>
    );
}