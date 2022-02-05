import React from "react";
import { VscHome } from "react-icons/vsc";
import { VscGear } from "react-icons/vsc";
import { VscRepo } from "react-icons/vsc";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { useRouter } from "next/router";
const IconCon=styled.div`
width:5rem;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`
const HomeIcon=styled.div`
display:${(props)=>props.HomeDis}
`
const GearIcon=styled.div`
display:${(props)=>props.GearDis}
`
const BookIcon=styled.div`
display:${(props)=>props.BookDis}
`
const Icon =({
    HomeDis='block',
    GearDis='none',
    BookDis='none',
    
})=>{

const router=useRouter()
return (
    <IconCon>
        <IconContext.Provider value={{ color: "grey", size:'2rem' }} >
        <HomeIcon HomeDis={HomeDis} onClick={()=>router.push("/")}>
        <VscHome  />
        </HomeIcon>
        <GearIcon GearDis={GearDis}>
        <VscGear onClick={()=>router.push("/setting")} />
        </GearIcon>
        <BookIcon BookDis={BookDis}>
        <VscRepo onClick={()=>router.push("/books")} />
        </BookIcon>

        </IconContext.Provider>

    </IconCon>
)
}

export default Icon