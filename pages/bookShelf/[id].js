import Head from 'next/head';
import ax from 'axios';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Footer from '@/comps/Footer';
import { useEffect, useState, useContext } from 'react'
import BookCom from '@/comps/BookCom';
import MyButton, { Button } from '@/comps/Button';
import Nav from '@/comps/Nav'
import CommentCard_nopic from '@/comps/CommentCard_nopic'
import { comp_theme, text_theme } from '../../utils/variables'
import { useTheme,useUser } from '../../utils/provider'
import { v4 as uuidv4 } from 'uuid';
import { useRead} from '@/utils/provider'
import CommentCard_new from '@/comps/CommentCard_new'


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
  const [data, setData] = useState(null)
  const { theme } = useTheme();
  const [bcomment, setbComment] = useState(book_comments)
  const { readlist, setReadlist } = useRead()
  const [bookIcon, setBookIcon] = useState()
  const {user, setUser} = useUser()
  const [shownewComment, setShowNewComment] = useState(false)
  const [post, setPost] = useState([])
  const [newcomment, setNewComment] = useState({
  comment: "input your comment",
  usersrc: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
  username: "Alex"
  })

  console.log(id)

  useEffect(()=>{
    // var currentUser=  sessionStorage.getItem("user");
    // var currentUser=JSON.parse(currentUser)
    // console.log(currentUser)
    // setUser(currentUser)
    //   console.log(user)
      const getBook = async () => {
        const res = await ax.get("/api/getOneBook", {
          headers: {
            "Authorization": `Bearer ${user.accessTk}`
          },
          params: {
            id: id
          }
        })
        console.log(res.data)
        setData(res.data.book)
      }
      getBook()
  },[])

  const editClick = () => {
    setShowNewComment(true)
  }

  // useEffect(()=>{
  //   if (id) {
  //     if(Object.keys(readlist).includes(id)){
  //       setBookIcon('bookmark')
  //     }else{
  //       setBookIcon('bookmark outline')
  //     }
  //    }
  // },[id])

  // useEffect(() => {
  //   if (id) {
  //     const GetBook = async () => {
  //       const res = await ax.get("/api/books", {
  //         params: {
  //           _id: id,
  //         }
  //       });
  //       // console.log(res.data)
  //       if (res.data[0]) {
  //         setDate(res.data[0])
  //       }
  //     }
  //     GetBook()
  //   }

  // }, [id])

 
  

  
//   if (data === null) {
//     return <div>
//       404 Can not find the book. </div>
//   }
//   const editClick = () => {
//     setShowNewComment(true)
//   }
//   const heartClick = (value,obj) => {
//     if (bookIcon =='bookmark outline') {
//       setBookIcon('bookmark')
     
//       const n_readlist = { ...readlist}
//       n_readlist[obj._id] = obj;
//       // var key="aaa"
//       // n_fav[key]=obj;
//       setReadlist(n_readlist)
//       // setIStatus(bookIcon)
//       // console.log(istatus)
//     }
//     else  {
//       setBookIcon('bookmark outline')
//       const n_readlist = {
//         ...readlist  }
//     delete n_readlist[obj._id];
//     setReadlist(n_readlist)

//   }
  
// }
// var sortnewcomment =[];
// var sortnewcomment =newcomment.sort(function(x, y) {
//   return x[0] < y[0] ? -1 : 1;
// });


const postcomment=()=>{
  setPost(post.concat(
    
    [newcomment].sort(function(left, right) {
      return left[0] > right[0] ? -1 : 1;
    })
    
    ))


  setShowNewComment(false)
}
console.log(post)

  return <div>
    <Head>
      <title>Echo</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='sB_Wrapper'>
      <div className='Container' >
        <div className='Nav'>
        {user ?
        <Nav onClick={()=>router.push('/bookShelf/search')} users= {user.username}  />
        :   <Nav onClick={()=>router.push('/bookShelf/search')}  />  }
        </div>
        <div className='Content' >
          <div className='Side_Bar'>
        
        {data!=null ?
          <BookCom
            src={data.image_l}
            title={data.title}
            author={data.authors}
            ISBN={data.isbn}
            YearOfPublication={data.pub_year}
            Publisher={data.publisher}
            heartClick={(e)=> heartClick(e.target.value, data)}
            iconName={bookIcon}
            editClick={editClick}
          />
          :
          null
        }
        
          </div>
          <div className='bookComment'>
           { shownewComment? <CommentCard_new
           onCancleClick={()=>setShowNewComment(false)}
            placeholder={newcomment.comment}
           onChange={ e => setNewComment({...newcomment, comment: e.target.value })}
           onPost={postcomment}
           /> : null}
           
            {post? post.map((o, i) =>
              <CommentCard_nopic
                key={i}
                comment={o.comment}
                usersrc={o.usersrc}
                // username={user}
              />
            ):null}
          
            {bcomment.map((o, i) =>
              <CommentCard_nopic
                key={i}
                comment={o.comment}
                usersrc={o.usersrc}
                // username={user}
              />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
}
