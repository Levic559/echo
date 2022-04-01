import Head from 'next/head'
import Logo from '@/comps/Logo'
import MyButton from '@/comps/Button'
import Footer from '@/comps/Footer'
import InputBox from '@/comps/InputBox'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import { comp_theme, text_theme } from '../utils/variables'
import { useTheme } from '../utils/provider'
import { useUser } from '../utils/provider'
import DropMenu from '@/comps/DropMenu'
import DropMenuAge from '@/comps/DropMenuAge'
import ax from 'axios'
import { registerHandler } from '@/utils/getData/registerHandler'
import Lottie from "lottie-react";
import welcome from "../utils/welcome.json";

var page = 1
export default function Home({
  title = "Sign Up"
}) {
  const router = useRouter();
  const { theme } = useTheme();
  const [page1, setPage1] = useState(true)
  const [page2, setPage2] = useState(false)
  const [page3, setPage3] = useState(false)
  const [e_warn, setE_Warn] = useState(false)
  const [warn, setWarn] = useState(false)
  const { user, setUser } = useUser()
  const [iconstate, setIconstate] = useState("eye")
  const [inputtype, setInputtype] = useState("password")
  const [gendervalue, setGendervalue] = useState("Gender")
  const [age, setAge] = useState("Age Level")
  const [load, setLoad] = useState(false)
  const onClick = () => {
    if (iconstate === "eye") {
      setIconstate("eye slash")
      setInputtype("password")
    }
    else {
      setIconstate("eye")
      setInputtype("text")
    }
  }
  const [register, setRegister] = useState({
    email: "",
    password: "",
    username: "",
    gender: "",
    age: "",
    location: ""
  })

  const nextPage = () => {
    if (page1) {
      let emailRegex = /^([A-Za-z\d\.-]+)@([A-Za-z\d-]+)\.([A-Za-z]{2,6})(\.[A-Za-z]{2,6})?$/
      let e_valid = emailRegex.test(register.email)
      let oneLowerCaseLetter = /(?=.+[a-z])/;
      let oneUppperCaseLetter = /(?=[A-Z])/;
      let oneDigit = /(?=.+[0-9])/;
      let oneSpecailCharacter = /(?=.+[!@#$%^&*])/;
      let minmunEnglishCharacter = /(?=.{8,})/;
      let valid =
        oneLowerCaseLetter.test(register.password) &&
        oneUppperCaseLetter.test(register.password) &&
        oneDigit.test(register.password) &&
        oneSpecailCharacter.test(register.password) &&
        minmunEnglishCharacter.test(register.password);

      if (e_valid && valid) {

        setPage1(false)
        setPage2(true)
        setPage3(false)
        setWarn(false)
        setE_Warn(false)
      }
      else if (!e_valid) {
        setE_Warn(true)
        setWarn(false)
      }
      else if (!valid) {
        setWarn(true)
        setE_Warn(false)
      }
    }


    else if (page2) {
      setPage1(false)
      setPage2(false)
      setPage3(true)
    }
    else {
      // setUser(register)
      // sessionStorage.setItem("user", JSON.stringify(register))
      // //Submit user register to /api/user

      submitUser(register)
      setLoad(true);
      setTimeout(() => {
        router.push("/")
      }, 5000);
    }
    // console.log("page " + page)
  }

  // Submit user register
  const submitUser = async (user) => {
    const res = await registerHandler(user)
    console.log(res)
  }

  const backPage = () => {
    if (page1) {
      router.push("/")
    }
    else if (page2) {
      setPage1(true)
      setPage2(false)
      setPage3(false)
    }
    else if (page3) {
      setPage1(false)
      setPage2(true)
      setPage3(false)
    }
    console.log("page " + page)
  }
  const maleOnClick = () => {
    setGendervalue("Male")
    setRegister({ ...register, gender: "Male" })
  }
  const femaleOnClick = () => {
    setGendervalue("Female")

    setRegister({ ...register, gender: "Female" })
  }
  const secretOnClick = () => {
    setGendervalue("Secret")
    setRegister({ ...register, gender: "Secret" })
  }
  const OneOnClick = () => {
    setAge("11-20")
    setRegister({ ...register, age: "11-20" })
  }
  const TwoOnClick = () => {
    setAge("21-30")
    setRegister({ ...register, age: "21-30" })
  }
  const ThreeOnClick = () => {
    setAge("31-40")
    setRegister({ ...register, age: "31-40" })
  }
  const FourOnClick = () => {
    setAge("41-50")
    setRegister({ ...register, age: "41-50" })
  }
  const FiveOnClick = () => {
    setAge("51-60")
    setRegister({ ...register, age: "51-60" })
  }
  const SixOnClick = () => {
    setAge("61-70")
    setRegister({ ...register, age: "61-70" })
  }
  const SevenOnClick = () => {
    setAge("71-80")
    setRegister({ ...register, age: "71-80" })
  }
  const EightOnClick = () => {
    setAge("81-90")
    setRegister({ ...register, age: "81-90" })
  }
  console.log(gendervalue)

  if (load === true) {
    return (
      <div className='Wrapper'>
        <div className='Container' >
          <div className="welcome"  >
            <Lottie className='animation' animationData={welcome} loop
            />
            <p >User name {register.username} Register successfully. </p>
          </div>
        </div>
      </div>
    )
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
          <p style={{ color: 'pink' }} className='welcome'>Welcome to</p>
          <Logo />
          {/* <p className="intro"> Every literate person is aware of the paragraph. Paragraphs are important in speeches, in writing or a random paragraph can be used as a prop in ads or presentations too! They are like the building blocks. </p> */}
        </div>
        {page1 ? (<div className='CardCon' style={{
          background: comp_theme[theme].label2,
          color: text_theme[theme].label
        }}>
          <p className='title'>{title}</p>
          <div className='InputCon'>
            <InputBox iconName="mail" text="Email" value={register.email} onChange={e => setRegister({ ...register, email: e.target.value })} />
            {e_warn ? <p style={{ color: "#ba1141" }}><b>The eamil is invalid</b></p> : null}
            <InputBox onClick={onClick}
              iconName={iconstate} type={inputtype} text="Password" value={register.password} onChange={e => setRegister({ ...register, password: e.target.value })} />
            <p className='warning'>The password requires a smaall and upper caselettter, a character, a number, and eight digits.</p>
            {warn ? <p style={{ color: "#ba1141" }}><b>The password is invalid</b></p> : null}
          </div>
          <div className='ButtonCon' >
            <MyButton onClick={backPage} text="Back" />
            <MyButton text="Next" onClick={nextPage} />
          </div>
        </div>)
          : null}
        {page2 ? (<div className='CardCon' style={{
          background: comp_theme[theme].label2,
          color: text_theme[theme].label
        }}>
          <p className='title'>{title}</p>
          <div className='InputCon'>
            <InputBox text="Username" value={register.username} onChange={e => setRegister({ ...register, username: e.target.value })} />
            {/* <InputBox text="Gender" value={register.gender} onChange={e => setRegister({ ...register, gender: e.target.value })} /> */}
            <DropMenu text={gendervalue} maleOnClick={maleOnClick} width="35rem"
              femaleOnClick={femaleOnClick} secretOnClick={secretOnClick} value={register.gender}
            />
          </div>
          <div className='ButtonCon' >
            <MyButton onClick={backPage} text="Back" />
            <MyButton text="Next" onClick={nextPage} />
          </div>
        </div>)
          : null}
        {page3 ? (<div className='CardCon' style={{
          background: comp_theme[theme].label2,
          color: text_theme[theme].label
        }}>

          <p className='title'>{title}</p>
          <div className='InputCon'>
            {/* <InputBox text="Age" value={register.age} onChange={e => setRegister({ ...register, age: e.target.value })} /> */}
            <DropMenuAge text={age} OneOnClick={OneOnClick} TwoOnClick={TwoOnClick} ThreeOnClick={ThreeOnClick} value={register.age}
              FourOnClick={FourOnClick} SixOnClick={SixOnClick} SevenOnCSevenk={SevenOnClick} EightOnClick={EightOnClick} FiveOnClick={FiveOnClick}
            />
            <InputBox text="Location" value={register.location} onChange={e => setRegister({ ...register, location: e.target.value })} />
          </div>
          <div className='ButtonCon' >
            <MyButton onClick={backPage} text="Back" />
            <MyButton text="Submit" onClick={nextPage} />
          </div>
        </div>)
          : null}
      </div>
      <Footer />
    </div>

  </div>

}
