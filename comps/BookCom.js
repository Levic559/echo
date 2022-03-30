import React,{useState,useEffect} from 'react';
import { comp_theme, text_theme } from '../utils/variables'
import { useTheme } from '../utils/provider'
import { Icon } from 'semantic-ui-react'
import IconBut from './IconBut';
import Image from 'next/image';
const default_date = {
    "ISBN": "195153448",
    "BookTitle": "Classical Mythology",
    "BookAuthor": "Mark P. O. Morford",
    "YearOfPublication": 2002,
    "rating": "3",
    "Publisher": "Oxford University Press",
    "ImageURLS": "http://images.amazon.com/images/P/0195153448.01.THUMBZZZ.jpg",
    "ImageURLM": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg",
    "ImageURLL": "http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg"
}

const BookCom = ({
    title = default_date.BookTitle,
    authors = default_date.BookAuthor,
    ISBN = default_date.ISBN,
    YearOfPublication = default_date.YearOfPublication,
    Publisher = default_date.Publisher,
    src = default_date.ImageURLM,
    heartClick = () => { },
    iconName = "heart outline",
    iconName2 = "edit",
    editClick=()=>{},
    // checked=()=>{}

}) => {
    const { theme } = useTheme();
    const [rate, setRate] = useState(default_date.rating);
    const [windowW,setWindowW]=useState("1000")

    useEffect(()=>{
    var width= window.innerWidth
    setWindowW(width)
    },[])



// console.log([...Array(Number(rate)).keys()])

return <div className='bookCom' style={{
    backgroundColor: comp_theme[theme].label,
    color: text_theme[theme].label
}}> {windowW <451 ?
    <Image src={src} width={300} height={100} objectFit="cover" alt="book's photo" />
    :
    <Image src={src} width={400} height={400} objectFit="cover" alt="book's photo" />

}
    <div className='BookTitle'>  {title}</div>
    {windowW <451 ?
        <div className='rating'>
            <Icon name='star'  />
            <Icon name='star' />
            <Icon name='star'  />
            <Icon name='star'  />
            <Icon name='star'  />

        </div>:
         <div className='rating'>
         <Icon name='star' size='large' />
         <Icon name='star' size='large' />
         <Icon name='star' size='large' />
         <Icon name='star' size='large' />
         <Icon name='star' size='large' />

     </div>
     }
    
    <div className='info'>
        <p>  {authors}</p>
        <p> ISBN: {ISBN}</p>
        <p> Year of Publish: {YearOfPublication}</p>
        <p> Publisher: {Publisher}</p>
    </div>
    <div className='rating'>
        <IconBut className="bookmark" iconName={iconName} onClick={heartClick} />
        {/* <input name='heart' size='large' type="checkbox"  onChange={heart} /> */}
        {/* <Icon name='sticky note' size='large' /> */}
        <IconBut className="edit" iconName={iconName2} onClick={editClick} />
    </div>

</div>
}


export default BookCom