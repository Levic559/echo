import Head from 'next/head'
import Logo from '@/comps/Logo'
import MyButton from '@/comps/Button'
import styled from'styled-components'
import Footer from '@/comps/Footer' 
import InputBox from '@/comps/InputBox'
import {useRouter} from 'next/router';
import{Card} from "../comps/IndexCard"
import { useState } from 'react'
import Nav from '@/comps/Nav'
var page=1
export default function Home({
  
}) {
  const router = useRouter();
  
  
  return <div>
      <Head>
        <title>setting</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='Wrapper'>
      <div className='Container align-items-start' style={{alignItems:"flex-start"}} >
      <Nav/>
        </div>
      <Footer/>
      </div>
      </div>

  
}
