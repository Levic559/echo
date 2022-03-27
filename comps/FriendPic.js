import {header_theme, text_theme} from'../utils/variables'
import {useTheme} from '../utils/provider'
import React from 'react';
import Image from 'next/image'

const default_date={

    
    "Friends": "Mark Morford",
  
    "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
   



}
const FriendPic=({
   
    src=default_date.image,
   height="130",
   width="130",
    onClick=()=>{},
    name='Member'
})=>{

    const {theme} = useTheme();

    return (
    <div className='friendPic' onClick={onClick} >

        <Image src={src} width={width} 
      height={height} objectFit="cover" />
        <p>{name}</p>
    </div>

    )
}



export default FriendPic