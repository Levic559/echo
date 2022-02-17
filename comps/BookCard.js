import React from 'react';


const BookCard=({
    bookTitle='title'
})=>{



    return <div className='bookCard_Con'>

        <img src='http://images.amazon.com/images/P/0002005018.01.LZZZZZZZ.jpg'/>
        <h3> {bookTitle} </h3>


        </div>


}



export default BookCard