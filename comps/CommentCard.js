import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
const CommentCard=({
  user="Lin"
})=>{



    return <div className='CommentCard_Con'>
        

        <img src='http://images.amazon.com/images/P/0002005018.01.LZZZZZZZ.jpg'/>
        <div className='content'>  Every literate person is aware of the paragraph. Paragraphs are important in speeches, in writing or a random paragraph can be used as a prop in ads or presentations too! They are like the building blocks. Since paragraphs have so many roles to play and it is needed, websites on the internet have developed a tool called Random Paragraph Generator which is a great help for those who are in search of random paragraphs for working purposes. </div>
        <div className='user'> 
            <img src="https://news.artnet.com/app/news-upload/2021/12/RachelUffner-byJasonFrankRothenberg-2015-750x550.jpg"/>
            <h3> {user}</h3>
            <Button variant="contained">more</Button>
          </div>


        </div>


}



export default CommentCard