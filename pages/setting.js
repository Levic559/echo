import Head from 'next/head';
import Footer from '@/comps/Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Nav from '@/comps/Nav';
import InputBox from '@/comps/InputBox';
import Button from '@mui/material/Button';
import { useTheme, useOrder,useRead,useFavlist } from '../utils/provider'
import { useUser, useShow } from '@/utils/provider'
import { useShow2, useShow3,useShow4,useShow5,useShow6} from '@/utils/provider'
import { comp_theme, text_theme, color_method,global_theme, } from '@/utils/variables';
import SwitchBasic from '@/comps/SwitchBasic'
import ax from 'axios'

export default function Home({

}) {
  const router = useRouter();
  const { order, setOrder } = useOrder();
  const { theme, setTheme } = useTheme();
  const { show, setShow } = useShow();
  const { show2, setShow2 } = useShow2();
  const { show3, setShow3 } = useShow3();
  const { show4, setShow4 } = useShow4();
  const { show5, setShow5 } = useShow5();
  const { show6, setShow6 } = useShow6();
  const { status, setStatus } = useShow();
  const { readlist, setReadlist } = useRead();
  const { favlist, setFavlist} = useFavlist();
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState()
  const [newUser,setNewUser]=useState()

  console.log(user)

  useEffect(()=>{
      const getUserDetial = async () => {
          const res = await ax.get("/api/getUserDetail", {
            headers: {
              "Authorization": `Bearer ${user}`
            },
          })
          setUserDetail(res.data.user)
        }
        getUserDetial()
  }, [])

  const logout = () => {
    
  }

  const submit =()=> {

  }
//   const submit=()=>{
//     setUser(newUser)
//     sessionStorage.setItem("user",JSON.stringify(newUser))
//   }
//   const logout=()=>{
//     router.push('/');
//     setUser('')
//     setReadlist('')
//     setFavlist('')
//     sessionStorage.clear();
//   }
//   useEffect(()=>{
//   var currentUser=  sessionStorage.getItem("user");
//   var currentUser=JSON.parse(currentUser)
//   console.log(currentUser)
//   setUser(currentUser)
//     console.log(user)
// },[])

  return <div>
    <Head>
      <title>Echo</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <div className='s_Wrapper'>
        <div className='Container'  >
          <div className='Nav'>
            {userDetail != undefined?
              <Nav onClick={() => router.push('/bookShelf/search')} users={userDetail.username} />
              : <Nav onClick={() => router.push('/bookShelf/search')} />}
          </div>
          <div className='Content'>
            { userDetail !=undefined ?
              <div className='personInfo'>
                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" alt="user's photo"/>
                <div className='content'>
                  <InputBox text="Email :"   placeholder={userDetail.email}/>
                  <InputBox text="User name :" placeholder={userDetail.username} onChange={e => setNewUser({ ...user, username: e.target.value })}/>
                  <InputBox text="Age :" placeholder={userDetail.age} onChange={e => setNewUser({ ...user, age: e.target.value })}/>
                  <InputBox text="Location :" placeholder={userDetail.country} onChange={e => setNewUser({ ...user, location: e.target.value })}/>
                  <InputBox text="Gender :" placeholder={userDetail.gender} onChange={e => setNewUser({ ...user, gender: e.target.value })}/>
                </div>
                <div className='button'>
                  <Button variant="contained"
                  style={{ background: text_theme[theme].title, color: text_theme[theme].label}} onClick={submit}
                  >Submit</Button>
                </div>
              </div>
              :
              null
            }  

            <div className='settingBox' style={{ background: comp_theme[theme].label2, color: text_theme[theme].label }}>
              <SwitchBasic
                switchText="Light Mode" switchHandler={() => setTheme(
                  theme === 'light' ? 'default' : 'light'
                )}
                btn={theme === 'light' ? 'On' : 'Off'}
                slideColor={theme === 'light' ? 'switch-body switch-body-on' : 'switch-body'} />
              <SwitchBasic
                switchText="Descendant" switchHandler={() => setOrder(
                  order === 'default' ? 'desc' : 'default'
                )}
                btn={order === 'default' ? 'On' : 'Off'}
                slideColor={order === 'default' ? 'switch-body switch-body-on' : 'switch-body'} />

              <SwitchBasic
                switchText="Private" switchHandler={() => setShow(
                  show === 'none' ? 'default' : 'none'
                )}
                btn={show === 'none' ? 'On' : 'Off'}
                slideColor={show === 'default' ?  'switch-body'  : 'switch-body switch-body-on'} 
                            />
              <SwitchBasic
                switchText="Personal Info" switchHandler={() => setShow2(
                  show2 === 'default' ? 'none' : 'default'
                )}
                btn={show2 === 'default' ? 'On' : 'Off'}
                slideColor={show2 === 'default' ? 'switch-body switch-body-on' : 'switch-body'} />
                <SwitchBasic
                switchText="Favo Books" switchHandler={() => setShow3(
                  show3 === 'default' ? 'none' : 'default'
                )}
                btn={show3 === 'default' ? 'On' : 'Off'}
                slideColor={show3 === 'default' ? 'switch-body switch-body-on' : 'switch-body'} />
                <SwitchBasic
                switchText="Read List" switchHandler={() => setShow4(
                  show4 === 'default' ? 'none' : 'default'
                )}
                btn={show4 === 'default' ? 'On' : 'Off'}
                slideColor={show4 === 'default' ? 'switch-body switch-body-on' : 'switch-body'} />
                  <SwitchBasic
                switchText="Friends" switchHandler={() => setShow5(
                  show5 === 'default' ? 'none' : 'default'
                )}
                btn={show5 === 'default' ? 'On' : 'Off'}
                slideColor={show5 === 'default' ? 'switch-body switch-body-on' : 'switch-body'} />
                  <SwitchBasic
                switchText="Clubs" switchHandler={() => setShow6(
                  show6 === 'default' ? 'none' : 'default'
                )}
                btn={show6 === 'default' ? 'On' : 'Off'}
                slideColor={show6 === 'default' ? 'switch-body switch-body-on' : 'switch-body'} />
                <div className='logout'>
              <Button variant="contained" onClick={logout} 
              style={{ background: text_theme[theme].label, color: text_theme[theme].title, 
              width:"75%"     }}
              >Log out</Button>
                  </div>

            </div>

          </div>
          <Footer />
        </div>

      </div>

  </div>


}
