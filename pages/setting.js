import Head from 'next/head';
import Footer from '@/comps/Footer';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Nav from '@/comps/Nav';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputBox from '@/comps/InputBox';
import Button from '@mui/material/Button';
import IosSwitch from '@/comps/MuiSwitch'
import Switch from '@/comps/Switch';
import {useTheme} from '@/utils/provider' 
import { comp_theme } from '@/utils/variables';
export default function Home({

}) {
  const router = useRouter();

  const {theme,setTheme}=useTheme();
  return <div>
    <Head>
      <title>Echo</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='s_Wrapper'>
      <div className='Container'  >
        <div className='Nav'>
          <Nav />
        </div>
        <div className='Content'>
          <div className='personInfo'>
            <img src="https://news.artnet.com/app/news-upload/2021/12/RachelUffner-byJasonFrankRothenberg-2015-750x550.jpg" />
            <div className='content'>
              <InputBox text="Account" style={{ width: '10rem' }} />
              <InputBox text="User name" />
              <InputBox text="Leave of Age" />
              <InputBox text="Location" />
              <InputBox text="Gender" />
            </div>
            <div className='button'>
              <Button variant="contained">Submit</Button>
            </div>
          </div>
          <div className='settingBox' style={{background:comp_theme[theme].label}}>
            <div>  
              <Switch
                onSwitchClick={() => setTheme(
                  theme === 'light' ? 'default' : 'light'
                )}
                btn={theme === 'light' ? 'Off' : 'On'}
              />
             
            </div>
            <div>  <div>Descendant </div>
              <IosSwitch />
              <div>On </div>
            </div>
            <div>  <div>Private </div>
              <IosSwitch />
              <div>On </div>
            </div>
            <div>  <div>Personal Info </div>
              <IosSwitch />
              <div>On </div>
            </div>
            <div>  <div>Favorite Book </div>
              <IosSwitch />
              <div>On </div>
            </div>
            <div>  <div>Friends </div>
              <IosSwitch />
              <div>On </div>
            </div>
            <div>  <div>Clubs </div>
              <IosSwitch />
              <div>On </div>
            </div>



            <Button variant="contained">Log out</Button>

          </div>

        </div>
        <Footer />
      </div>
    </div>
  </div>


}
