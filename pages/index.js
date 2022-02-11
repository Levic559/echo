import Head from 'next/head'
import Logo from '@/comps/Logo'
import MyButton from '@/comps/Button'
import styled from'styled-components'
import Footer from '@/comps/Footer' 
import InputBox from '@/comps/InputBox'
import {useRouter} from 'next/router';





export default function Home({
  title="Log in"
}) {
  const router = useRouter();
 
  return <div>
      <Head>
        <title>Echo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='Wrapper'>
      <div className='Container' >
        <div className='LogoCon'>
          {/* <p className='welcome'>Welcome</p> */}
        <Logo/>
        <p className="intro"> Echo is a reader social media. 
In the application, each reader can leave and find comments about books. Also, they can record books to their reading list.
You may see other people’s reading lists, so you can request a friend connection or subscribe to their new comments. We provide a platform where readers can share their thoughts and find the same or different ideas. The way may give you the other aspect of view to read books. . </p>

        </div>
        <div className='CardCon'>
        <p className='title'>{title}</p>
        <InputBox/>
        <InputBox text="Password"/>
        <div className='ButtonCon'>
        <MyButton onClick={() => router.push("/signUp")}  text="Sign Up"/>
        <MyButton text="Log in" />
        </div>
        </div>
      </div>
      <Footer/>
      </div>

    </div>
  
}
