import Head from 'next/head'
import ax from 'axios';
import Footer from '@/comps/Footer'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import Nav from '@/comps/Nav'
import BookCard from '@/comps/BookCard'
import { comp_theme, text_theme } from '../../utils/variables'
import { useTheme,useUser } from '../../utils/provider'
import { getAllBooksHandler } from '@/utils/getData/bookHandler';

export default function Bookshelf({

}) {

  const { theme } = useTheme();
  const { user } = useUser();
  const router = useRouter();
  const [books, setbooks] = useState([]);
  const [books2, setbooks2] = useState([]);
  const [books3, setbooks3] = useState([]);
  const [curpage, setCurPage] = useState(1);
  

  useEffect(()=>{

      if(user == null) return router.push('/')

      const getBooks = async () => {
          const TK = user.accessTk
          const res = await getAllBooksHandler(TK, 1)
          setbooks((res.books).slice(0, 100))
          setbooks2((res.books).slice(100, 200))
          setbooks3((res.books).slice(200, 300))

      }

      getBooks(1)

  },[])
  
  // useEffect(()=>{
  //   var currentUser=  sessionStorage.getItem("user");
  //   var currentUser=JSON.parse(currentUser)
  //   console.log(currentUser)
  //   setUser(currentUser)
  //     console.log(user)
  // },[])
  
  // const itemsPerPage = 15;
  // var butt_arr = [];
  // var start = 1;
  // for (var i = 1; i < 1000; i += itemsPerPage) {
  //   // butt_arr.push(i)
  //   butt_arr.push(((i - 1) / itemsPerPage) + 1);
  //   // start++
  // }

  // butt_arr = butt_arr.slice(
  //   curpage - 5 < 0 ? 0 : curpage - 5,
  //   curpage + 5);

  // const GetBooks = async (p) => {
  //   const res = await ax.get("/api/books",
  //     { params: { page: p } })
  //   setbooks(res.data)
  //   setCurPage(p)
  // }
  
  return <div>
    <Head>
      <title>bookShelf</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='B_Wrapper'>
      <div className='B_Container' >
        <div className='B_Nav'>
        {user ?
        <Nav onClick={()=>router.push('/bookShelf/search')} users= {user.username}  />
        :   <Nav onClick={()=>router.push('/bookShelf/search')}  />  }
        </div>
        <div className='B_Content' >
          <div className='Side_Bar'>
            <div className='Pannel' style={{
              background: comp_theme[theme].label,
              color: text_theme[theme].label
            }}>
              <a onClick={() => router.push('/bookShelf')} > BookShelf</a>
              <a onClick={() => router.push('/comments')} > Comments</a>
              <a  onClick={()=>alert("Constructing")}>  Friends</a>
              <a onClick={() => router.push('/clubs')}> Clubs</a>
              <a  onClick={()=>alert("Constructing")}> Subscription</a>
            </div>
          </div>
          <div className='Feed_Area' style={{ color: text_theme[theme].title }}>
            <div className='Drawers' >
              <div className='lable' >
                <h3 > Popular books for your Location</h3>
              </div>
              <div className='Drawer'>
                {books.map((o) =>
                  <BookCard key={o._id}
                    onClick={() => router.push(`/bookShelf/${o._id}`)}
                    src={o.image_s}
                    YearOfPublication={o.pub_year}
                    title={o.title.substr(0, 20) + "..."}
                    BookAuthor={o.authors}
                  />
                )}

              </div>
              
            </div>
            <div className='Drawers'>
              <div className='lable'>

                <h3> Popular books from your friens</h3>
              </div>
              <div className='Drawer'>
                {books2.map((o, i) =>
                  <BookCard key={i}
                  onClick={() => router.push(`/bookShelf/${o._id}`)}
                  src={o.image_s}
                  YearOfPublication={o.pub_year}
                  title={o.title.substr(0, 20) + "..."}
                  BookAuthor={o.authors}
                  />

                )}
              </div>

            </div>
            <div className='Drawers'>
              <div className='lable'>
                <h3> Popular books for your clubs</h3>
              </div>
              <div className='Drawer'>
                {books3.map((o, i) =>
                  <BookCard key={i}
                  onClick={() => router.push(`/bookShelf/${o._id}`)}
                  src={o.image_s}
                  YearOfPublication={o.pub_year}
                  title={o.title.substr(0, 20) + "..."}
                  BookAuthor={o.authors}
                  />

                )}
              </div>


            </div>

          </div>

        </div>




        <Footer />

      </div>
    </div>
  </div>


}
