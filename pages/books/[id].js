import Head from 'next/head';
import ax from 'axios';
import {useRouter} from 'next/router';
import styled from 'styled-components';
import Footer from '@/comps/Footer';
import { Input } from 'semantic-ui-react'
import {useEffect, useState} from 'react'
import Header from '@/comps/Header';
import BookCom from '@/comps/BookCom';
import MyButton, { Button } from '@/comps/Button';
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
const ContentCon = styled.div`
width:100%;
height:90%;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
padding-top:1rem;

`

export default function BooksID() {
  const router = useRouter();
  const {id} = router.query;
  const [data,setDate]=useState(null)
  useEffect(()=>{
    if(id){
      const GetBook= async()=>{
        const res= await ax.get("/api/books",{
          params:{
            book_id:id,
          }
        });
        
        console.log(res)
        if(res.data[0])
        {
          setDate(res.data[0])
        }
        
      }
      GetBook()
    }
  },[id])
  if (data===null){
    return <div> 404 Can not find the book. </div>
  }
  return (
    <Wrapper>
      <Container>
      <Header />
      {/* Make a new list for <b>{id}</b> */}
      <ContentCon>


      <BookCom
      title={data.title}
      author={data.author}
      id={data.bookID}
      rating={data.average_ratin}
      pages={data.num_pages}

      
      />
      <MyButton onClick={()=>{
        //save in your own api!
      }} text='save'></MyButton>
      </ContentCon>

      </Container>
      <Footer/>
    </Wrapper>
  )
}
