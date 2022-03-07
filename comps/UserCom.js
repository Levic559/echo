import React from 'react';
import {comp_theme, text_theme,private_method} from'../utils/variables'
import {useTheme} from '../utils/provider'
import { Icon } from 'semantic-ui-react'
import Image from 'next/image'
const default_date={

    "src": "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    "account": "Alex@gmail.com",
    "username": "Alex",
    "gender": "Male",
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
    private_m="private_v",
    info_m="info_v"
})=>{
    const {theme} = useTheme();
return<div className='userCom'  style={{
    backgroundColor:comp_theme[theme].label,
    color:text_theme[theme].label
    }}>
    <Image src={src} width={500} height={500} objectFit="cover"/>
    <div className='name'>  {username}</div>
    <div className={private_m}> 
    <Icon name='heart' size='large' />
    <Icon name='sticky note' size='large' />
    <Icon name='edit' size='large' />
     </div>

    <div className={info_m}>
    <p> {account} </p>
    <p> Gender: {gender}</p>
    <p> Age: {age}</p>
    <p> Location: {location}</p>
        </div>   
    

</div>
}


export default UserCom