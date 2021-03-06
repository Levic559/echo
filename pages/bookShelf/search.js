import Head from 'next/head'
import ax from 'axios';
import Footer from '@/comps/Footer'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import Nav from '@/comps/Nav'
import BookCard from '@/comps/BookCard'
import { comp_theme, text_theme ,order_method} from '../../utils/variables'
import { useTheme,useUser,useOrder, useSearchKey, useSearchValue } from '../../utils/provider'
import { searchBookHandler } from '@/utils/getData/bookHandler';
import { getOneUser } from '@/utils/getData/userHandler';


export default function Bookshelf({

}) {
  const {order} = useOrder();
  const { theme } = useTheme();
  const { searchKey, setSearchKey} = useSearchKey()
  const { searchValue, setSearchValue} = useSearchValue()
  const { user } = useUser();
  const router = useRouter();
  const [data, setData] = useState([]);
  const [publish,setPublish]=useState(false)
  const [page, setPage] = useState(1)
  const [userDetail, setUserDetail] = useState()
  useEffect(()=>{

    if(user == null) return router.push('/')

    searchBooks(searchKey, searchValue, page)


    const getUserDetial = async () => {
        const TK = user.accessTk
        const res = await getOneUser(TK)
        setUserDetail(res.user)
    }

    getUserDetial()
  },[])

  const searchBooks = async (k,v,p) => {
      const TK = user.accessTk
      const res = await searchBookHandler(TK, k, v, p)
      if(res!=undefined){
        setData(res.books)
      }
  }

  const searchBooksInSearchPage = () => {
      searchBooks(searchKey, searchValue, page)
  }

  return <div>
    <Head>
      <title>bookShelf</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='B_Wrapper'>
      <div className='B_Container' >

        <div className='B_Nav'>
        {userDetail != undefined?
              <Nav onSubmitSearch={searchBooksInSearchPage} users={userDetail.username} />
              : <Nav onClick={() => router.push('/bookShelf/search')} />}
          {/* <Nav onSubmitSearch={searchBooksInSearchPage}/>  */}
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
              <div className='label' >
                <h3 > Search result <h4 > (Search for {searchValue})</h4></h3>
                
              </div>
             

              <div className='Drawer_search'>
                
                {(data==undefined || data.length==0) ? <h4> There is no result.</h4>
                :
                data.map((o) =>
                  <BookCard key={o._id}
                    onClick={() => router.push(`/bookShelf/${o._id}`)}
                    src={o.image_s}
                    title={o.title.substr(0, 20) + "..."}
                    BookAuthor={o.authors}
                    YearOfPublication={o.pub_year}
                  />
                ) 
              
              }

              </div>
              {/* <MyButton onClick={()=>GetBooks()}>1</MyButton> */}
            </div>

          </div>

        </div>

        <Footer />

      </div>
    </div>
  </div>

}
