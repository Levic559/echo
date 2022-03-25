import {header_theme, text_theme} from'../utils/variables'
import {useTheme} from '../utils/provider'
import React from 'react';
import Image from 'next/image'

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
const BookCard=({
    title=default_date.BookTitle,
    src=default_date.ImageURLM,
    BookAuthor=default_date.BookAuthor,
    YearOfPublication=default_date.YearOfPublication,
    onClick=()=>{},
})=>{

    const {theme} = useTheme();

    return (
    <div className='bookCard' onClick={onClick} >

        <Image src={src} width={150}
      height={150} objectFit="cover" alt="book's photo"/>
      <div className='discription'>
        <p style={{color:text_theme[theme].title}}> {title} </p>
        <p style={{color:text_theme[theme].title}}> {BookAuthor} </p>
        <p style={{color:text_theme[theme].title}}> {YearOfPublication} </p>
      </div>
        </div>

    )
}



export default BookCard