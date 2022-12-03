import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import img1 from '../assests/image4.svg'
import img2 from '../assests/image5.svg'
import img3 from '../assests/image6.svg'
import img4 from '../assests/image7.svg'
function Example(props)
{
    var items = [
        {
            name: "Light/Dark Mode",
          
            image: img1,
        },
        {
            name: "Figma Files Inculded",
          
            image: img2,
        },
        {
            name: "100+ UI Flexible Sections",
          
            image: img3,
        },
        {
            name: "Free Lifetime Updates",
         
            image: img4,
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper sx={{width:"100%", height:"70vw",alignItems:"center", marginLeft:"24px"}}>
           
          
            <img  src={props.item.image} style={{alignItems:"center" , marginLeft:"85px" }}/>
            <h2 style={{textAlign:"center"}}>{props.item.name}</h2>
        </Paper>
    )
}

export default Example
