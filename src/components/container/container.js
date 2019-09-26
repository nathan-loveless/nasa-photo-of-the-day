import React, {useState, useEffect} from "react";
import Title from "../title/title.js";
import Image from "../image/image.js";
import Description from "../description/description.js";
import axiosData from "react";



export default function Container()
{
    const [apod, setapod] = useState([]);
    useEffect(() => 
    {
        async function fetchData() {
        try {
          const temp = await axiosData.get(
            "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
          );
          console.log(temp);
          
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }, []);

    // This is the rendering main container, it will do the rest of the compoments and get the APOD
    return (
        <><div>
            <Title title='test'/>
            <Image image='test'/>
            <Description desc='test'/>
        </div></>
    );
}