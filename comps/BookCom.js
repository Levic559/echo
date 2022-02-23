import React from 'react';
import {comp_theme, text_theme} from'../utils/variables'
import {useTheme} from '../utils/provider'
import { Icon } from 'semantic-ui-react'

const default_date={
    "ISBN": "195153448",
    "BookTitle": "Classical Mythology",
    "BookAuthor": "Mark P. O. Morford",
    "YearOfPublication": 2002,
    "Publisher": "Oxford University Press",
    "ImageURLS": "http://images.amazon.com/images/P/0195153448.01.THUMBZZZ.jpg",
    "ImageURLM": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg",
    "ImageURLL": "http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg"
  }

const BookCom =({
    title=default_date.BookTitle,
    authors=default_date.BookAuthor,
    ISBN=default_date.ISBN,
    YearOfPublication=default_date.YearOfPublication,
    Publisher=default_date.Publisher,
    src=default_date.ImageURLM
})=>{
    const {theme} = useTheme();
return<div className='bookCom'  style={{
    backgroundColor:comp_theme[theme].label,
    color:text_theme[theme].label
    }}>
    <img src={src}/>
    <div className='BookTitle'>  {title}</div>
    <div className='rating'><Icon name='star outline' size='large' />
            <Icon name='star outline' size='large' />
            <Icon name='star outline' size='large' />
            <Icon name='star outline' size='large' />
           
     </div>
    <div className='info'>
    <p>  {authors}</p>
    <p> ISBN: {ISBN}</p>
    <p> Year of Publish: {YearOfPublication}</p>
    <p> Publisher: {Publisher}</p>
    </div>   
    

</div>
}


export default BookCom