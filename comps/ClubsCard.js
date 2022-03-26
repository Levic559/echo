import {header_theme, text_theme} from'../utils/variables'
import {useTheme} from '../utils/provider'
import React from 'react';
import Image from 'next/image'

const default_date={

    
    "clubs": "Mark Morford",
  
    "ImageURLS": "http://images.amazon.com/images/P/0195153448.01.THUMBZZZ.jpg",
    "ImageURLM": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg",
    "ImageURLL": "http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg"



}
const ClubsCard=({
   
    src=default_date.ImageURLM,
    clubs=default_date.clubs,
   height="130",
   width="130",
    onClick=()=>{},
})=>{

    const {theme} = useTheme();

    return (
    <div className='friendCard' onClick={onClick} >

        <Image src={src} width={width}
      height={height} objectFit="cover" alt="clubs' photo" />
        <p style={{color:text_theme[theme].title}}> {clubs} </p>
    
        </div>

    )
}



export default ClubsCard