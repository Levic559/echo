import {header_theme, text_theme} from'../utils/variables'
import {useTheme} from '../utils/provider'
import React from 'react';
import Image from 'next/image'

const default_date={

    
    "Friends": "Mark Morford",
  
    "ImageURLS": "http://images.amazon.com/images/P/0195153448.01.THUMBZZZ.jpg",
    "ImageURLM": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg",
    "ImageURLL": "http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg"




}
const FriendCard=({
   
    src=default_date.ImageURLM,
    friends=default_date.Friends,
   
    onClick=()=>{},
})=>{

    const {theme} = useTheme();

    return (
    <div className='friendCard' onClick={onClick} >

        <Image src={src} width={130}
      height={130} objectFit="cover" />
        <p style={{color:text_theme[theme].title}}> {friends} </p>
    
        </div>

    )
}



export default FriendCard