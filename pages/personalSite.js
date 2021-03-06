import Head from 'next/head'
import Footer from '@/comps/Footer'
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react'
import Nav from '@/comps/Nav'
import UserCom from '@/comps/UserCom'
import FriendCard from '@/comps/FriendCard'
import ClubCard from '@/comps/ClubCard'
import { comp_theme, text_theme,private_method,info_method,fav_method,read_method,
  friends_method,clubs_method } from '../utils/variables'
import { useShow, useTheme,useShow2,useShow3,useShow4,useShow5,useShow6 } from '../utils/provider'
import { useRead, useUser,useFavlist,useClublist, useClubreadlist, useMyClublist} from '@/utils/provider'
import ReadListCom from '@/comps/ReadListCom';
import { useDrop } from "react-dnd";
import axios from 'axios';
import { getReadBookHandler, updateReadBookHandler } from '@/utils/getData/readBookHandler';
import { getFavoBookHandler, addFavoBookHandler } from '@/utils/getData/favoBookHandler';
import { Button,Card } from 'semantic-ui-react'


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
  const { clublist, setClublist } = useClublist()
  const { myclublist, setMyClublist } = useMyClublist([])
  const { clubreadlist, setClubreadlist } = useClubreadlist()
  const { favlist, setFavlist } = useFavlist()
  const router = useRouter();
  // console.log(Object.values(readlist))
  const [fav, setFav] = useState([])


  const [friends, setFriends] = useState(friends_list)

  useEffect(()=>{
    if(user == null) return router.push('/')

    const TK = user.accessTk
    const getReadList = async () => {
        const res = await getReadBookHandler(TK)
        const result = res.readbooks.readbooks
        let arr = []
        
        for(let i=0; i<result.length; i++){
          arr.push(result[i].bookID)
        }

        setReadlist(arr)
        
    }
    const getFavList = async () => {
        const res = await getFavoBookHandler(TK)
        const result = res?.favobooks?.favobooks || null
        let arr = []
        
        if(result){
          for(let i=0; i<result.length; i++){
            arr.push(result[i].bookID)
          }
        }

        setFavlist(arr)
    }

    getReadList()
    getFavList()

  }, [])

  const handleRemove = (i) => {
    const newReadList = readlist.filter((l)=>l._id!=i)
    setReadlist(newReadList)
  }

  const handleRemove_fav = (i) => {
    const newFavoList = favlist.filter((l)=>l._id!=i)
    setFavlist(newFavoList)
    
  }
 
  // const [board, setBoard] = useState([]);
  const items = [
    {
      header: 'Save the favo and read list.',
      // description:
      //   'You need to click the save button when you change the list.',
      meta:  'You need to click the save button everytime when you change the list.',
    }
  ]

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "book",
    drop: (item) =>{
      setFavlist((pre)=>[...pre, item.obj])
    },
    collect: (monitor) => ({
      isOver: !monitor.isOver(),
    }),}))

    // const addBookToFav = (_id) => {
    //   console.log("_id",_id)
    //   const flist = Object.values(readlist).filter((o)=> _id === o._id);
    //   console.log("flist",flist)
    //   setFav((fav)=>[...fav, flist[0]]);
    // };

  const [{ isOver2 }, drop2] = useDrop(() => ({
    accept: "book",
    drop2: (item) => addBookToClub(item),
    collect: (monitor) => ({
      isOver2: !monitor.isOver(),
    }),}))

  const addBookToClub = (_id) => {
    console.log("_id",_id)
    const flist = Object.values(readlist).filter((o)=> _id === o._id);
    console.log("flist",flist)
    setClubreadlist((clubreadlist)=>[...clubreadlist, flist[0]]);
    console.log("clubreadlist",clubreadlist)
  };

  const saveChanges =async () => {
    const TK = user.accessTk
    let favoArr = []
    let readArr = []
    for(let i=0; i<favlist.length; i++){
      favoArr.push(favlist[i]._id)
    }
    for(let i=0; i<readlist.length; i++){
      readArr.push(readlist[i]._id)
    }
    console.log(favoArr, readArr)
    const resReadlist = await updateReadBookHandler(TK, readArr)
    const resFavolist = await addFavoBookHandler(TK, favoArr)

  }
  
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
            
             { favlist.map((o) =>{
                  return <ReadListCom 
                        key={o._id} 
                        OnDoubleClick={() => router.push(`/bookShelf/${o._id}`)}
                        ReadlistClick={() => handleRemove_fav(o._id)}
                        text={o.title} 
                        book={o}
                  />})  
              }

             {/* { fav!=undefined?
                fav.map((o) =>{
                return <ReadListCom 
                  key={o._id} 
                  OnDoubleClick={() => router.push(`/bookShelf/${o._id}`)}
                  ReadlistClick={() => handleRemove_fav(i)}
                  text={o.title} 
                 />}
                 ) 
                : 
                null
              } */}

          </div>
              
            </div>
            <div className='readlist'
              style={{ background: comp_theme[theme].label2 }}>
              <div className='title'>Read list </div>
              <div className={read_method[show4].label}>


                {readlist.map((o) =>{
                  return <ReadListCom 
                        key={o._id} 
                        OnDoubleClick={() => router.push(`/bookShelf/${o._id}`)}
                        ReadlistClick={() => handleRemove(o._id)}
                        text={o.title}
                        book={o}
                    />}
                )}

              </div>
            </div>
                  <div className='save'>
                   <div className='card' style={{background: comp_theme[theme].label2}}>
                   <h4>Save the favo and read list.</h4>
                   <p>You need to click the save button everytime when you change the list.</p>
                   </div>
                   
            <Button onClick={saveChanges}>Save</Button>
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
              </div>
            </div>
            <div className='clubs'
              style={{ background: comp_theme[theme].label2 }} >
              <div className='title'>Clubs </div>
              <div className={clubs_method[show6].label} >
              {Object.values(myclublist).map((o,i)=>{
              return  <ClubCard 
                 onClick={() => router.push(`/clubs/${o._id}`)}
                 key={i}
                 src={o.image}
                 clubs={o.title}
                
                 />   
               } ) }
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  
    </>

}
