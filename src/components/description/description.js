import React from "react";
import styled from 'styled-components';

const MyDesc = styled.div.attrs({
    className: 'description'
  })`
  box-sizing: border-box;
  background: lightgoldenrodyellow;
  width: 100%;
  padding: 10px;
  `;

export default function Description(props)
{
    return (
        <><MyDesc className='description'>
            <p>{props.desc}</p>
        </MyDesc></>
    );
}