import {header_theme, text_theme} from'../utils/variables'
import {useTheme} from '../utils/provider'
import React from 'react';


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
    isbn=default_date.ISBN,
    YearOfPublication=default_date.YearOfPublication,
    onClick=()=>{},
})=>{

    const {theme} = useTheme();

    return (
    <div className='bookCard' onClick={onClick} >

        <img src={src}/>
        <p style={{color:text_theme[theme].title}}> {title} </p>
        <p style={{color:text_theme[theme].title}}> {isbn} </p>
        <p style={{color:text_theme[theme].title}}> {YearOfPublication} </p>
        </div>

    )
}



export default BookCard