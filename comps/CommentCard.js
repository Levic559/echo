import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Image from 'next/image'
const default_date={
  "booksrc":"http://images.amazon.com/images/P/0002005018.01.LZZZZZZZ.jpg",
  "comment":"Every literate person is aware of the paragraph. Paragraphs are important in speeches, in writing or a random paragraph can be used as a prop in ads or presentations too! They are like the building blocks. Since paragraphs have so many roles to play and it is needed, websites on the internet have developed a tool called Random Paragraph Generator which is a great help for those who are in search of random paragraphs for working purposes.",
  "usersrc":"https://news.artnet.com/app/news-upload/2021/12/RachelUffner-byJasonFrankRothenberg-2015-750x550.jpg",
  "username":"Mary"
}


const CommentCard=({
  booksrc=default_date.booksrc,
  comment=default_date.comment,
  usersrc=default_date.usersrc,
  username=default_date.username

})=>{



    return <div className='CommentCard_Con'>
        

        <Image src={booksrc} width="20rem"
      height="20rem" objectFit="cover"/>
        <div className='content'> {comment}   </div>
        <div className='user'> 
            <img src={usersrc}/>
            <h3> {username}</h3>
            <Button variant="contained">more</Button>
          </div>


        </div>


}



export default CommentCard