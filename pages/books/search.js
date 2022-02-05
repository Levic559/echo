import Head from 'next/head';
import ax from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Footer from '@/comps/Footer';
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react';
import {order_method,code_method,RC_method} from'../../utils/variables';
import {useOrder,useCode,useRC} from '../../utils/provider';



import Header from '@/comps/Header';
import MyButton from '@/comps/Button';
const Wrapper = styled.div`
width:100%;
height:100vh;
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
`

const Container = styled.div`
width:50rem;
height:65rem;
display:flex;
flex-direction:column;
justify-content: space-between;
align-items:center;
border:2px solid lightgrey;
border-radius:1rem;

`
const SearchCon = styled.div`
width:100%;
height:3.5rem;
display:flex;
flex-direction:row;
justify-content:center;
`
const PageCon = styled.div`
width:100%;
height:5rem;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`
const ContentCon = styled.div`
width:90%;
height:50rem;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding-top:1rem;
overflow: auto;
`
const BookCon = styled.div`
width:100%;
height:4rem;
margin:.25rem;
padding:.5rem;
background-color:lightgrey;
vertical-align: middle;
`
const PageBut = styled.div`
width:2rem;
height:2rem;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
border-radius:50%;
margin:1rem
`
let timer = null;
export default function Search() {
  const{code} =useCode()
  const {order} = useOrder();
  const router = useRouter()
  const [books, setbooks] = useState([]);
  const [data, setData] = useState([]);
  const [curpage, setCurPage] = useState(1);
  const [sbr,setSBR]=useState(false)
  const [sbr_type,setSBRType]=useState("asc")
  const itemsPerPage = 15;
  var butt_arr = [];
  var start = 1;
  for (var i = 1; i < 20000; i += itemsPerPage) {
    // butt_arr.push(i)
    butt_arr.push(((i - 1) / itemsPerPage) + 1);
    // start++
  }
  butt_arr = butt_arr.slice(
    curpage - 5 < 0 ? 0 : curpage - 5,
    curpage + 5);
 
  const GetBooks = async (p) => {

    const res = await ax.get("/api/books_search", {
      params: {
        page: p
      }
    })
    // console.log(res.data)
    setData(res.data)
    setCurPage(p)
  }
  const inputFilter = async (txt,lan, person, rc,trc) => {
    console.log(txt, lan)
    if (timer) {
      clearTimeout(timer);
      timer = null
    }
    if (timer===null){
      timer= setTimeout(async()=>{
        console.log("async call!!!")
        const res = await ax.get("/api/books_search",{
          params:{
            txt:txt,
            lan: code_method[code].label,
            person:person,
            rc:rc,
            trc:trc,
            sort_rating:sbr,
            sort_type:order_method[order].label
          }
        })
        // console.log(typeof(order_method[order].label))
        console.log(res.data);
        setData(res.data);
        timer=null;
      },1500)
  }
  }
  const inputFilter_aut = async (person) => {
    console.log(person)
    if (timer) {
      clearTimeout(timer);
      timer = null
    }
    if (timer===null){
      timer= setTimeout(async()=>{
        console.log("async call!!!")
        const res = await ax.get("/api/books_search",{
          params:{
            lan: code_method[code].label,
            person:person,
            sort_rating:sbr,
            sort_type:order_method[order].label
          }
        })
        console.log(res.data);
        setData(res.data);
        timer=null;
      },1500)
  }
  }


  const OffSort=()=>{
    setSBR(!sbr)
  }
    return (
      
      <Wrapper>
         <Head>
        <title>LEBRARY</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Container>
          <Header />
          <SearchCon> 

            <Input style={{ width: '40%', margin: '.5rem' }} 
            // action={{ icon: 'search' }}
              placeholder='Title'
              onChange={(e) => inputFilter(e.target.value)} />
             <Input style={{ width: '40%', margin: '.5rem' }} 
            //  action={{ icon: 'search' }}
              placeholder='Authors'
              onChange={(e) => inputFilter_aut(e.target.value)} />
          </SearchCon>

          <Button onClick={OffSort} style={{background:sbr?"pink":"white"}}>sort by rating </Button>
          <ContentCon>
            {data.map((o, i) =>
              <BookCon key={i}
  
                onClick={() => router.push(`/books/${o.bookID}`)}>
                <b>{o.title.substr(0, 20)+"..."}</b>   -
                {o.average_rating} -
                {o.ratings_count} -
              </BookCon>
            )}
          </ContentCon>
          <PageCon>
            {butt_arr.map((o, i) => <PageBut key={i}
              style={{ background: o === curpage ? "pink" : "lightgrey" }}
              onClick={() => GetBooks(o)}> {o}  </PageBut>)}
          </PageCon>
        </Container>
        {/* <button onClick={() => {
          //make a new fav list!
        }}>New Favs</button> */}
        <Footer />
      </Wrapper>
    )
  


}
