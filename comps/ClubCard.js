import {header_theme, text_theme} from'../utils/variables'
import {useTheme} from '../utils/provider'
import React from 'react';
import Image from 'next/image'

const default_date = {
   
  "title": "The magic world",
  "host": "Mark ",
  "create_date": 2002,
  "Status": "Public",
  "image": "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  
}
const ClubCard=({
    title=default_date.title,
    src=default_date.image,
    host=default_date.host,
    create_date=default_date.create_date,
    onClick=()=>{},
})=>{
 
    const {theme} = useTheme();

    return (
    <div className='bookCard' onClick={onClick} >

        <Image src={src} width={150}
      height={150} objectFit="cover"  alt="club's photo"/>
      <div className='discription'>
        <p style={{color:text_theme[theme].title}}> {title} </p>
        <p style={{color:text_theme[theme].title}}> {host} </p>
        <p style={{color:text_theme[theme].title}}> {create_date} </p>
      </div>
        </div>

    )
}



export default ClubCard