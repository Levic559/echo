import {header_theme, text_theme} from'../utils/variables'
import {useTheme} from '../utils/provider'
import React from 'react';
import Image from 'next/image'

const default_date={
    "member":"Me",
    "image": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "message":"Hello Welcome to join the club."
}

const Message_own =({
    src=default_date.image,
    message=default_date.message,
    width="30",height="30",
    member=default_date.member
})=>{
    const { theme } = useTheme();

return <div className='messageCom' >

   
    <div className='message' 
    style={{ background: text_theme[theme].title, color: text_theme[theme].label }}
    > {message}</div>
     <Image src={src} width={width} 
      height={height} objectFit="cover" alt="speaker's photo"/>
    <div>{member}</div>
</div>


}



export default Message_own