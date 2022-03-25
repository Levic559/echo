import React, {useEffect,useState}from 'react'
import Head from 'next/head'
import Footer from '@/comps/Footer'
import { useRouter } from 'next/router';
import Nav from '@/comps/Nav'
import CommentCard from '@/comps/CommentCard'
import { comp_theme, text_theme } from '../utils/variables'
import { useTheme } from '../utils/provider'


const user_comments = [
  {
    "booksrc": "http://images.amazon.com/images/P/0195153448.01.LZZZZZZZ.jpg",
    "comment": "Classical Mythology is the best text available; an excellent and complete introduction. Its strengths include its thoroughness, readability, informative notes and appendices, glossary, indices, and format.--Richard A. Spencer, Appalachian State University.",
    "usersrc": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    "username": "Mary"
  },
  {
    "booksrc": "http://images.amazon.com/images/P/0002005018.01.LZZZZZZZ.jpg",
    "comment": "I didn't like Burden of Proof but thought I would give this author's books another try. I couldn't finish it so will try no more. He is a good writer but the stories are full of convolution and uninteresting characters. Sadly, I am done.",
    "usersrc": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    "username": "Janny"
  },
  {
    "booksrc": "http://images.amazon.com/images/P/0671870432.01.LZZZZZZZ.jpg",
    "comment": "A story about a character with no redeeming features.The story contains endless examples of gratuitous sex and bad language.There are many rambling diversions.Avoid at all costs.",
    "usersrc": "https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    "username": "Ali"
  },
  {
    "booksrc": "http://images.amazon.com/images/P/074322678X.01.LZZZZZZZ.jpg",
    "comment": "After reading all Grisham's books, I have tested Scott Turow. I have enjoyed it very much, but I would not recommend it to anyone whose mother tongue is not (American) English.",
    "usersrc": "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    "username": "Linda"
  },
  {
    "booksrc": "http://images.amazon.com/images/P/3404921038.01.LZZZZZZZ.jpg",
    "comment": "Really good. I'm a Turow fan and I enjoyed this one a lot!",
    "usersrc": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    "username": "Alice"
  },
]


export default function Home({

}) {
  const router = useRouter();
  const [comment, setComment] = useState(user_comments)
  const { theme } = useTheme();
 
  return <div>
    <Head>
      <title>bookShelf</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='C_Wrapper'>
      <div className='Container'  >
        <div className='Nav'>

          <Nav onClick={() => router.push('bookShelf/search')} />
        </div>
        <div className='Content'>
          <div className='Side_Bar'>
            <div className='Pannel' style={{
              background: comp_theme[theme].label,
              color: text_theme[theme].label
            }}>
              <a onClick={() => router.push('/bookShelf')} > BookShelf</a>
              <a onClick={() => router.push('/comments')} > Comments</a>
              <a> Friends</a>
              <a onClick={() => router.push('/clubs')}> Clubs</a>
              <a> Subscription</a>
            </div>
          </div>
          <div className='Feed_Area'>

            {comment.map((o, i) =>

              <CommentCard key={i}
                booksrc={o.booksrc}
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
