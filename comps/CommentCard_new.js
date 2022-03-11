import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { comp_theme, text_theme,global_theme } from '../utils/variables'
import { useTheme } from '../utils/provider'
const default_date = {

  "comment": "",
  "usersrc": "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
  "username": "Alex"
}


const CommentCard_new = ({

  comment = default_date.comment,
  usersrc = default_date.usersrc,
  username = default_date.username,
  onCancleClick=()=>{},
  onChange=()=>{},
  onPost=()=>{},
  placeholder

}) => {
  const { theme } = useTheme();
  const [pcomment, setPcomment] = useState('')
  return <div className='CommentCard_Con_nopic' style={{

    color: text_theme[theme].title
  }}>

     <div className='textarea' style={{
      color: text_theme[theme].title
    }} >  
   
    <div className='buttonCon' variant="contained" style={{
      color: text_theme[theme].title,
      background:global_theme[theme].body
    }}> <div className='button' onClick={onCancleClick}>X</div></div>
  
    <input text="comment" onChange={onChange} placeholder={placeholder}></input>
     </div> 
    <div className='user'>
      <img src={usersrc} />
      <h3 style={{

        color: text_theme[theme].title
      }}> {username}</h3>


       <Button variant="contained" style={{
          color: text_theme[theme].label,
          background:text_theme[theme].title
        }}
        onClick={onPost}
        >Post</Button>
    </div>


  </div>


}



export default CommentCard_new