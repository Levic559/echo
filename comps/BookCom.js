import React from 'react';
import styled from 'styled-components'



const BookCon =styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:pink;
width:80%;
padding:5rem;
border-radius:1rem;
height:50%
`
const BookTitle=styled.div`
font-size:1.5rem;
font-weight:bold;
margin-bottom:3rem
`
const BookAuthors=styled.div`
font-size:1.1rem;
margin-bottom:1rem;
font-weight:bold
`
const BookContent=styled.div`
font-size:1.1rem;
margin-bottom:1rem
`

const default_date={
    "bookID": 1,
    "title": "Harry Potter and the Half-Blood Prince (Harry Potter  #6)",
    "authors": "J.K. Rowling/Mary GrandPré",
    "average_rating": "4.57",
    "isbn": "0439785960",
    "isbn13": "9780439785969",
    "language_code": "eng",
    "num_pages": "652",
    "ratings_count": 2095690,
    "text_reviews_count": 27591,
    "publication_date": "9/16/2006",
    "publisher": "Scholastic Inc.",
    "FIELD13": ""
  }

const BookCom =({
    title=default_date.title,
    authors=default_date.authors,
    id=default_date.bookID,
    rating=default_date.average_rating,
    pages=default_date.num_pages,
    isbn13=default_date.isbn13,
    publication_date=default_date.publication_date

})=>{

return<BookCon>
    
    <BookTitle>  {title}</BookTitle>
    <BookAuthors>  {authors}</BookAuthors>
    <BookContent> BookID: {id}</BookContent>
    <BookContent> Rating: {rating}</BookContent>
    <BookContent> Page: {pages}</BookContent>
    <BookContent> ISBN13: {isbn13}</BookContent>
    <BookContent> Publication_date: {publication_date}</BookContent>

</BookCon>
}


export default BookCom