import React from 'react';
import {comp_theme, text_theme} from'../utils/variables'
import {useTheme} from '../utils/provider'
import { Icon } from 'semantic-ui-react'
import Image from 'next/image'
const default_date={

    "src": "https://news.artnet.com/app/news-upload/2021/12/RachelUffner-byJasonFrankRothenberg-2015-750x550.jpg",
    "account": "Sophia@gmail.com",
    "username": "Sophia",
    "gender": "female",
    "age": "45",
    "location": "Vancouver",
  
  }

  const UserCom =({
    src=default_date.src,
    account=default_date.account,
    username=default_date.username,
    gender=default_date.gender,
    age=default_date.age,
    location=default_date.location,
})=>{
    const {theme} = useTheme();
return<div className='userCom'  style={{
    backgroundColor:comp_theme[theme].label,
    color:text_theme[theme].label
    }}>
    <Image src={src} width={500} height={500} objectFit="cover"/>
    <div className='name'>  {username}</div>
    <div className='rating'> 
    <Icon name='heart' size='large' />
    <Icon name='sticky note' size='large' />
    <Icon name='edit' size='large' />
     </div>

    <div className='info'>
    <p> {account} </p>
    <p> Gender: {gender}</p>
    <p> Age: {age}</p>
    <p> Location: {location}</p>
        </div>   
    

</div>
}


export default UserCom