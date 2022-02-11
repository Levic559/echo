import Head from 'next/head'
import Logo from '@/comps/Logo'
import MyButton from '@/comps/Button'
import styled from'styled-components'
import Footer from '@/comps/Footer' 
import InputBox from '@/comps/InputBox'
import {useRouter} from 'next/router';
import{Card} from "../comps/Card"
import { useState } from 'react'

var page=1
export default function Home({
  title="Sign Up"
}) {
  const router = useRouter();
  const [component1, setcomponent1] = useState(Card.one.component1);
  const [component2, setcomponent2] = useState(Card.one.component2);
  const nextPage = () => 
  {
    page++;
    
    if (page == 1)
    {
        setcomponent1(Card.one.component1);
        setcomponent2(Card.one.component2);
    }
    else  if (page == 2)
    {
        setcomponent1(Card.two.component1);
        setcomponent2(Card.two.component2);
    } 
    else  if (page == 3)
    {
        setcomponent1(Card.third.component1);
        setcomponent2(Card.third.component2);
       
    } 
    else  if (page == 4)
    {
         router.push("/bookShelf")
    } 
    console.log("page " + page)
  }
  const backPage = () => 
  {
    page--;
    if (page == 3)
   {
     setcomponent1(Card.third.component1);
     setcomponent2(Card.third.component2);
   } 
    else  if (page == 2)
    {
      setcomponent1(Card.two.component1);
      setcomponent2(Card.two.component2);
    } 
    else if (page == 1)
    {
        setcomponent1(Card.one.component1);
        setcomponent2(Card.one.component2);
       
    }
    else if (page == 0)
    {
         router.push("/")
    }
    console.log("page " + page)
  }
  return <div>
      <Head>
        <title>Echo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='Wrapper'>
      <div className='Container' >
        <div className='LogoCon'>
          <p className='welcome'>Welcome to</p>
        <Logo/>
        {/* <p className="intro"> Every literate person is aware of the paragraph. Paragraphs are important in speeches, in writing or a random paragraph can be used as a prop in ads or presentations too! They are like the building blocks. </p> */}
        </div>
        <div className='CardCon'>
        <p className='title'>{title}</p>
        {component1}
        {component2}
        <div className='ButtonCon'>
        <MyButton onClick={backPage}/>
        <MyButton text="Next" onClick={nextPage}/>
        </div>
        </div>
      </div>
      <Footer/>
      </div>

    </div>
  
}
