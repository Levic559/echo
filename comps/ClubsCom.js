import React,{useState} from 'react';
import { comp_theme, text_theme } from '../utils/variables'
import { useTheme } from '../utils/provider'
import { Icon } from 'semantic-ui-react'
import IconBut from './IconBut';
import Image from 'next/image';
const default_date = {
   
    "title": "The magic world",
    "host": "Mark ",
    "create_date": 2002,
    "status": "Public",
    "members":"6",
    "image": "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    
}

const ClubsCom = ({
    title = default_date.title,
    host = default_date.host,
    create_date = default_date.create_date,
    status = default_date.status,
    src = default_date.image,
    members = default_date.members,
    heartClick = () => { },
    iconName = "heart outline",
    iconName2 = "edit",
    editClick=()=>{},
    // checked=()=>{}

}) => {
    const { theme } = useTheme();
   
    

return <div className='bookCom' style={{
    backgroundColor: comp_theme[theme].label,
    color: text_theme[theme].label
}}>
   
    <Image src={src} width={400} height={400} objectFit="cover" />
   
    <div className='BookTitle'>  {title}</div>
    <div className='info'>
        <p> host: {host}</p>
        <p> members: {members}</p>
        <p> Create on: {create_date}</p>
        <p> Status: {status}</p>
    </div>
    {/* <div className='rating'>
        <IconBut className="heart" iconName={iconName} onClick={heartClick} />
        <IconBut className="edit" iconName={iconName2} onClick={editClick} />
    </div> */}

</div>
}


export default ClubsCom