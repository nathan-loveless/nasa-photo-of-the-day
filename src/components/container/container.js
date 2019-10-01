import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import Title from "../title/title.js";
import Image from "../image/image.js";
import Description from "../description/description.js";
import Axios from "axios";

const MyContainer = styled.div.attrs({
  className: 'container'
})`
  width: 50vw;
  background: lightgrey;
  margin-left: 10px;
`;

export default function Container()
{
    const [apod, setapod] = useState([]);
    useEffect(() => 
    {
        async function fetchData() {
        try {
          const returnData = await Axios.get(
            "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-09-30"
          );
          setapod(returnData.data);
          console.log(returnData);

          
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }, []);

    // This is the rendering main container, it will do the rest of the compoments and get the APOD
    return (
        <><MyContainer className='container'>
            <Title title={apod.title}/>
            <Image image={apod.url}/>
            <Description desc={apod.explanation}/>
        </MyContainer></>
    );
}