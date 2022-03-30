import Head from 'next/head';
import ax from 'axios';
import { useRouter } from 'next/router';
import Footer from '@/comps/Footer';
import { useEffect, useState, useContext } from 'react'
import ClubsCom from '@/comps/ClubsCom';
import Nav from '@/comps/Nav'
import { comp_theme, order_method, text_theme } from '../../utils/variables'
import { useTheme,useClublist, useUser } from '../../utils/provider'
import { v4 as uuidv4 } from 'uuid';
import { useRead, useIstatus } from '@/utils/provider'
import FriendPic from '@/comps/FriendPic';
import Button from '@mui/material/Button';
import { Icon } from 'semantic-ui-react'
import Message from '@/comps/Message';
import Message_own from '@/comps/Message_own';
import { ConstructionOutlined } from '@mui/icons-material';
import { getOneClub } from '@/utils/getData/clubHandler';



const memberList = [{
  "_id": "member1",
  "src": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
]

export default function ClubsID() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null)
  const { theme } = useTheme();
  const { user } = useUser()
  const { clublist, setClublist } = useClublist();
  const { readlist, setReadlist } = useRead()
  const [heartIcon, setHeartIcon] = useState()
  const [member, setMember] = useState()
  const [post, setPost] = useState()
  const [newcomment, setNewComment] = useState({
    comment: ""
    // usersrc: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    // username: "Alex"
    })

  const default_member_img = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

  useEffect(()=>{

      if(user == null) return router.push('/')

      const getClub = async (p) => {
        const TK = user. accessTk
        const clubID = id
        const res = await getOneClub(TK, clubID)
        setData(res.club)
        setMember(res.club.members)
        setReadlist(res.club.bookList)
      }

      if (id) {
        // if(Object.keys(clublist).includes(id)){
        //   setHeartIcon('heart')
        // }else{
        //   setHeartIcon('heart outline')
        // }
        getClub()
      }

  },[])


  // useEffect(() => {
  //   if (id) {
  //     const GetBook = async () => {
  //       const res = await ax.get("/api/clubs", {
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
  //   // const setHeart= ()=>{
  //   //   if(Object.keys(readlist).includes("195153448")===true){
  //   //     setHeartIcon('heart')
  //   //   }
  //   // }
  //   // setHeart()
  // }, [id])

  const heartClick = (value, obj) => {
    if (heartIcon == 'heart outline') {
      setHeartIcon('heart')

      const n_clublist = { ...clublist }
      n_clublist[obj._id] = obj;
      // var key="aaa"
      // n_fav[key]=obj;
      setClublist(n_clublist)
      // setIStatus(heartIcon)
      // console.log(istatus)
    }
    else {
      setHeartIcon('heart outline')
      const n_clublist = {
        ...clublist
      }
      delete n_clublist[obj._id];
      setClublist(n_clublist)

    }

  }
  const postcomment = () => {
    var posts=post.concat([newcomment])
    setPost(posts)
  }
  // console.log(newcomment)
  return <div>
    <Head>
      <title>Echo</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='sB_Wrapper'>
      <div className='Container' >
        <div className='Nav'>
          <Nav onClick={() => router.push('/bookShelf/search')} />
        </div>
        <div className='Content' >
          <div className='Side_Bar'>

            { data!=undefined?
              <ClubsCom
                // src={data.image}
                title={data.title}
                host={data.host.username}
                members={data.member_count}
                create_date={data.create_date}
                // Publisher={data.publisher}
                // heartClick={(e) => heartClick(e.target.value, data)}
                // iconName={heartIcon}
              />
              :
              null
            }

            <div className='members' style={{
              background: comp_theme[theme].label2,
              color: text_theme[theme].label
            }}>
              <div className='title'> Members</div>

              <div className='membersContent'>
                { member != undefined?
                  member.map((o) =>
                    <FriendPic width={35} height={35} key={o.memberID._id} src={default_member_img} name={o.memberID.username}/>
                  )
                  :
                  null
                }

              </div>

            </div>
          </div>
          <div className='clubContent'>
            <div className='books'>
              <div className='topTen' style={{
                backgroundColor: comp_theme[theme].label2,
                color: text_theme[theme].label
              }}>
                <div className='title'>Top Ten</div>
                <div className='content'>
                  { readlist != undefined? 
                    readlist.slice(0,10).map((li)=>(
                        <div key={li.bookID._id}>
                          <div>Book: {li.bookID.title}</div>
                          <div>Authors: {li.bookID.authors}</div>
                          <div>Likes: {li.like_count}</div>
                        </div>
                    ))
                    :
                    null
                  }
                  
                </div>
              </div>
              <div className='recommendation' style={{
                backgroundColor: comp_theme[theme].label2,
                color: text_theme[theme].label
              }}>
                <div className='title'>Recommendation list</div>
                <div className='content'>
                  { readlist != undefined? 
                    readlist.map((li)=>(
                        <div key={li.bookID._id}>
                          <div>Book: {li.bookID.title}</div>
                          <div>Authors: {li.bookID.authors}</div>
                          <div>Likes: {li.like_count}</div>
                        </div>
                    ))
                    :
                    null
                  }
                </div>
              </div>
            </div>

            <div className='chatChannel'
              style={{
                backgroundColor: comp_theme[theme].label2,
                color: text_theme[theme].label
              }}>

              <div className='title'>Chat Channel</div>
              <div className='content'>
              <Message    />
              <Message    />
              <Message    />
              <Message_own/>

              <Message    />
              {post ? post.map((o,i)=>{
                return <Message_own 
                
                key={i}
                message={o.comment}               
                
                />

              }):null }
              </div>
              <div className='input'>
                <input  onChange={e => setNewComment({...newcomment, comment: e.target.value })}/>
                <Button variant="contained"
                  style={{ background: text_theme[theme].title, color: text_theme[theme].label }} 
                onClick={postcomment}
                >
                  <Icon name='paper plane' size='large' />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
}



