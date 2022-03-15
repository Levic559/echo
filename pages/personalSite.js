import Head from 'next/head'
import Footer from '@/comps/Footer'
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react'
import Nav from '@/comps/Nav'
import UserCom from '@/comps/UserCom'
import FriendCard from '@/comps/FriendCard'
import { comp_theme, text_theme,private_method,info_method,fav_method,read_method,
  friends_method,clubs_method } from '../utils/variables'
import { useShow, useTheme,useShow2,useShow3,useShow4,useShow5,useShow6 } from '../utils/provider'
import { useRead, useUser,useFavlist } from '@/utils/provider'
import ReadListCom from '@/comps/ReadListCom';
import { useDrop } from "react-dnd";
const favorite_book = [
  { "title": "Classical Mythology" },
  { "title": "Tell Me This Isn't Happening" },
  { "title": "All the King's Men" },
  { "title": "The Pillars of the Earth" },
  { "title": "Atonement : A Novel" },
  { "title": "My Antonia" },
]
const read_list = [
  { "title": "Neun ErzÃ?Â¤hlungen" },
  { "title": "Congo" },
  { "title": "Bleachers" },
  { "title": "TDeception Point" },
  { "title": "Thief of Time" },
  { "title": "Born Confused" },
]
const friends_list = [
  {
    "imgsrc": 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    "friendName": "Amelia"
  },
  {
    "imgsrc": 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    "friendName": "Lili "
  },
  {
    "imgsrc": 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    "friendName": "Alice"
  },
  {
    "imgsrc": 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    "friendName": "Mia"
  },
  {
    "imgsrc": 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    "friendName": "Debby"
  },
]
export default function Home({

}) {
  const { theme } = useTheme();
  const { show } = useShow();
  const { show2 } = useShow2();
  const { show3 } = useShow3();
  const { show4 } = useShow4();
  const { show5 } = useShow5();
  const { show6 } = useShow6();
  const { user } = useUser();
  const { readlist, setReadlist } = useRead()
  const { favlist, setFavlist } = useFavlist()
  const router = useRouter();
  // console.log(Object.values(readlist))
  const [fav, setFav] = useState([])

  const [friends, setFriends] = useState(friends_list)


  const handleRemove = (i) => {
    console.log(i)
    let list = Object.values(readlist)
    setReadlist([
      ...list.slice(0, i),
      ...list.slice(i + 1)
    ]);
  }
  const handleRemove_fav = (i) => {
    
      let list = Object.values(fav)
    setFav([
      ...list.slice(0, i),
      ...list.slice(i + 1)
    ]);
    
  }

 
  // const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "book",
    drop: (item) => addBookToFav(item.id),
   
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),}))
   
    const addBookToFav = (_id) => {
      console.log("_id",_id)
      
      const flist = Object.values(readlist).filter((o)=> _id === o._id);
      console.log("flist",flist)
      // fav.concat(...fav,flist)
      setFav((fav)=>[...fav, flist[0]]);
    
    };
  
  return <>
    <Head>
      <title>Echo</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='P_Wrapper'>
      <div className='Container' >
        <div className='Nav'>
          {user ?
            <Nav onClick={() => router.push('/bookShelf/search')} users={user.username} />
            : <Nav onClick={() => router.push('/bookShelf/search')} />}
        </div>
        <div className='Content' >
          <div className='Side_Bar'>
            {user ? <UserCom username={user.username}
              account={user.email}
              gender={user.gender}
              age={user.age}
              location={user.location}
              
              private_m={private_method[show].label}
            info_m={info_method[show2].label}

            /> : <UserCom 
            private_m={private_method[show].label}
            info_m={info_method[show2].label}
            />}
          </div>
          <div className='userContent' style={{ color: text_theme[theme].label }}>
            <div className="favorite" ref={drop}
              style={{ background: comp_theme[theme].label2 }}>
              <div className='title'>Favorite books </div>
             
              <div className={fav_method[show3].label} >
              {Object.values(fav).map((o, i) =>{
           return <ReadListCom 
          

          key={i._id}
           _id={o._id}  
            OnDoubleClick={() => router.push(`/bookShelf/${o._id}`)}
            ReadlistClick={() => handleRemove_fav(i)}
            text={o.title} 
            />}
            )}
          </div>
              
            </div>
            <div className='readlist'
              style={{ background: comp_theme[theme].label2 }}>
              <div className='title'>Read list </div>
              <div className={read_method[show4].label}>
                {/* {read.map((o,i)=>
                 <div className='book' key={i}> {o.title} </div> 
                )}  */}

                {Object.values(readlist).map((o,i) =>{
               return <ReadListCom 
          key={i._id}
              // key={i}
               _id={o._id}   
                OnDoubleClick={() => router.push(`/bookShelf/${o._id}`)}
                ReadlistClick={() => handleRemove(i)}
                text={o.title}
                />}

              
                  // <div className='book' key={i} onDoubleClick={() => router.push(`/bookShelf/${o.ISBN}`)}> {o.title}
                  //   <button
                  //     onClick={() => handleRemove(i)}>x</button> </div>
                )}


              </div>
            </div>
            <div className='friends'
              style={{
                background: comp_theme[theme].label2

              }}>
              <div className='title'>Friends </div>
              <div className={friends_method[show5].label}>
                {friends.map((o,i)=>
                 <FriendCard 
                 key={i}
                 src={o.imgsrc}
                 friends={o.friendName}
                 
                 />   

                )  }
                {/* <img src='https://i.insider.com/5cf1200a11e2052506753045?width=700' />
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-846lPaZVDgy8kofUQo5R11Jf9ytcLptaw&usqp=CAU' />
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWkSP3EKcAp15vWWiw1o8SERDOD5DoQDryFzN0DzBpQ-LY0FChuI2ADvmTq1DUYglQ3C4&usqp=CAU' />
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Xd1w6AWRAVtdqZnQ4IhJ9xMzFvPJSo-4rROiBz_FlvWb_luhbt0W8CiE4YvVudLJ2wI&usqp=CAU' />
                <img src='https://i.insider.com/5cb8b133b8342c1b45130629?width=700' /> */}
              </div>
            </div>
            <div className='clubs'
              style={{ background: comp_theme[theme].label2 }}>
              <div className='title'>Clubs </div>
              <div className={clubs_method[show6].label}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoq3XfcyXDm5A7bbAqUUTIheK4FHJEaw7Qsw&usqp=CAU' />
                <img src='https://theadventurine.com/wp-content/uploads/2017/11/830-lead-1.jpg' />
                <img src='https://img.52lishi.com/m00/1c/e1/004b8fed7fb287aa89a4d6ed0c472799.jpg' />
                <img src='https://images.theconversation.com/files/103266/original/image-20151126-11973-19t4uys.jpg?ixlib=rb-1.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip' />
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4TURvVAei2RsKypJjYZuVdMk8G59ObT2uss4zLD6JL96NOgAlYur_lnGB62KJOJyJfA&usqp=CAU' />

              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  
    </>

}
