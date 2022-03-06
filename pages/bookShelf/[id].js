import Head from 'next/head';
import ax from 'axios';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Footer from '@/comps/Footer';
import { useEffect, useState,useContext } from 'react'
import BookCom from '@/comps/BookCom';
import MyButton, { Button } from '@/comps/Button';
import Nav from '@/comps/Nav'
import CommentCard_nopic from '@/comps/CommentCard_nopic'
import { comp_theme, text_theme } from '../../utils/variables'
import { useTheme } from '../../utils/provider'
import { v4 as uuidv4 } from 'uuid';
import {useRead}from '@/utils/provider'


const book_comments = [
  {

    "comment": "Classical Mythology is the best text available; an excellent and complete introduction. Its strengths include its thoroughness, readability, informative notes and appendices, glossary, indices, and format.--Richard A. Spencer, Appalachian State University.",
    "usersrc": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    "username": "Mary"
  },
  {
    "comment": "I didn't like Burden of Proof but thought I would give this author's books another try. I couldn't finish it so will try no more. He is a good writer but the stories are full of convolution and uninteresting characters. Sadly, I am done.",
    "usersrc": "https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "username": "Janny"
  },
  {
    "comment": "A story about a character with no redeeming features.The story contains endless examples of gratuitous sex and bad language.There are many rambling diversions.Avoid at all costs.",
    "usersrc": "https://media.istockphoto.com/photos/young-woman-portrait-in-the-city-picture-id1009749608?k=20&m=1009749608&s=612x612&w=0&h=3bnVp0Y1625uKkSwnp7Uh2_y_prWbgRBH6a_6jRew3g=",
    "username": "Ali"
  },
  {
    "comment": "After reading all Grisham's books, I have tested Scott Turow. I have enjoyed it very much, but I would not recommend it to anyone whose mother tongue is not (American) English.",
    "usersrc": "https://i.pinimg.com/originals/31/94/d7/3194d7c2de116c908a50792ece3a54bd.jpg",
    "username": "Linda"
  },
  {
    "comment": "Really good. I'm a Turow fan and I enjoyed this one a lot!",
    "usersrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YYQX-SEzg1KB0MwqfQLBjs7MasTpU7KiONxC76gz5F4nrDwzDUOQExULtDnNvx60Bh0&usqp=CAU",
    "username": "Alice"
  },
]
export default function BooksID() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setDate] = useState(null)
  const { theme } = useTheme();
  const [bcomment, setbComment] = useState(book_comments)
  const {readlist,setReadlist}=useRead()
  useEffect(() => {
    if (id) {
      const GetBook = async () => {
        const res = await ax.get("/api/books", {
          params: {
            book_isbn: id,
          }
        });
        // console.log(res.data)
        if (res.data[0]) {
          setDate(res.data[0])
        }
      }
      GetBook()
    }
  }, [id])
  const StoreReadlist = (checked, obj) => {
    //store the favourites to be used on the next page
    console.log(checked,obj)
    if(checked){
      const n_readlist={...readlist}
      n_readlist[obj.ISBN]=obj;
      // var key="aaa"
      // n_fav[key]=obj;
      setReadlist(n_readlist)
    // console.log(n_readlist)

    }else {
      const n_readlist ={
        ...readlist
      }
      delete n_readlist[obj.ISBN];
      setReadlist(n_readlist)
    }
 
  }
  if (data === null) {
    return <div> 404 Can not find the book. </div>
  }
  return <div>
    <Head>
      <title>Echo</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='sB_Wrapper'>
      <div className='Container' >
        <div className='Nav'>
        <Nav  onClick={()=>router.push('/bookShelf/search')}/>
        </div>
        <div className='Content' >
          <div className='Side_Bar'>

            <BookCom
              src={data.ImageURLL}
              title={data.BookTitle}
              author={data.BookAuthor}
              ISBN={data.ISBN}
              YearOfPublication={data.YearOfPublication}
              Publisher={data.Publisher}
              heart={(e)=> StoreReadlist(e.target.checked, data)}
              checked={readlist[data.ISBN]!==undefined && readlist[data.ISBN]!==null}
            />
          </div>
          <div className='bookComment'>
            {bcomment.map((o, i) =>
              <CommentCard_nopic 
              key={i}
              comment={o.comment}
              usersrc={o.usersrc}
              username={o.username}
              />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
}
