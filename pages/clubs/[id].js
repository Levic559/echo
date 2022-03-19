import Head from 'next/head';
import ax from 'axios';
import { useRouter } from 'next/router';
import Footer from '@/comps/Footer';
import { useEffect, useState, useContext } from 'react'
import ClubsCom from '@/comps/ClubsCom';
import Nav from '@/comps/Nav'
import { comp_theme, text_theme } from '../../utils/variables'
import { useTheme } from '../../utils/provider'
import { v4 as uuidv4 } from 'uuid';
import { useRead, useIstatus } from '@/utils/provider'
import FriendPic from '@/comps/FriendPic';
import Button from '@mui/material/Button';
import { Icon } from 'semantic-ui-react'
import Message from '@/comps/Message';
import Message_own from '@/comps/Message_own';
const memberList = [{
  "_id": "member1",
  "src": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{
  "_id": "member2",
  "src": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}, {
  "_id": "member3",
  "src": "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}, {
  "_id": "member4",
  "src": "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}, {
  "_id": "member5",
  "src": "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}, {
  "_id": "member6",
  "src": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}, {
  "_id": "member7",
  "src": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}, {
  "_id": "member8",
  "src": "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}, {
  "_id": "member9",
  "src": "https://images.unsplash.com/photo-1539125530496-3ca408f9c2d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}, {
  "_id": "member10",
  "src": "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}, {
  "_id": "member11",
  "src": "https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}, {
  "_id": "member12",
  "src": "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}, {
  "_id": "member13",
  "src": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}, {
  "_id": "member14",
  "src": "https://images.unsplash.com/photo-1523464862212-d6631d073194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}, {
  "_id": "member15",
  "src": "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}, {
  "_id": "member16",
  "src": "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}, {
  "_id": "member17",
  "src": "https://images.unsplash.com/photo-1589156288859-f0cb0d82b065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}, {
  "_id": "member18",
  "src": "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}, {
  "_id": "member19",
  "src": "https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
}, {
  "_id": "member20",
  "src": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
},

]
export default function ClubsID() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setDate] = useState(null)
  const { theme } = useTheme();
  const { istatus, setIStatus } = useIstatus();
  const { readlist, setReadlist } = useRead()
  const [heartIcon, setHeartIcon] = useState()
  const [member, setMember] = useState(memberList)
  const [post, setPost] = useState()




  useEffect(() => {
    if (id) {
      const GetBook = async () => {
        const res = await ax.get("/api/clubs", {
          params: {
            _id: id,
          }
        });
        // console.log(res.data)
        if (res.data[0]) {
          setDate(res.data[0])
        }
      }
      GetBook()
    }
    // const setHeart= ()=>{
    //   if(Object.keys(readlist).includes("195153448")===true){
    //     setHeartIcon('heart')
    //   }
    // }
    // setHeart()
  }, [id])





  if (data === null) {
    return <div>
      404 Can not find the book. </div>
  }
  const editClick = () => {
    setShowNewComment(true)
  }
  const heartClick = (value, obj) => {
    if (heartIcon == 'heart outline') {
      setHeartIcon('heart')

      const n_readlist = { ...readlist }
      n_readlist[obj._id] = obj;
      // var key="aaa"
      // n_fav[key]=obj;
      setReadlist(n_readlist)
      // setIStatus(heartIcon)
      // console.log(istatus)
    }
    else {
      setHeartIcon('heart outline')
      const n_readlist = {
        ...readlist
      }
      delete n_readlist[obj._id];
      setReadlist(n_readlist)

    }

  }
  const postcomment = () => {
    setPost([newcomment])
    setShowNewComment(false)
    console.log(post)
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
          <Nav onClick={() => router.push('/bookShelf/search')} />
        </div>
        <div className='Content' >
          <div className='Side_Bar'>
            <ClubsCom
              src={data.image}
              title={data.title}
              host={data.host}
              members={data.members}
              create_date={data.create_date}
              Publisher={data.publisher}
              heartClick={(e) => heartClick(e.target.value, data)}
              iconName={heartIcon}
              editClick={editClick}
            />
            <div className='members' style={{
              background: comp_theme[theme].label2,
              color: text_theme[theme].label
            }}>
              <div className='title'> Members</div>

              <div className='membersContent'>
                {
                  member.map((o, i) =>
                    <FriendPic width={35} height={35} key={i} src={o.src} />

                  )
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
                <div className='content'></div>
              </div>
              <div className='recommendation' style={{
                backgroundColor: comp_theme[theme].label2,
                color: text_theme[theme].label
              }}>
                <div className='title'>Recommendation list</div>
                <div className='content'></div>
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
              <Message_own/>
              </div>
              <div className='input'>
                <input />
                <Button variant="contained"
                  style={{ background: text_theme[theme].title, color: text_theme[theme].label }} 
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



