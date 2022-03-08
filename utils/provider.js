import {useContext, createContext, useState} from 'react';
import {global_theme} from './variables'

//the variables you want to provide to all the pages/components wrapped around this provider
const initialStates = {
    theme:"default",
    setTheme:()=>{},
    order:"default",
    setOrder:()=>{},
    readlist:{},
    setReadlist:()=>{},
    user:{},
    setUser:()=>{},
    show:"default",
    setShow:()=>{},
    show2:"default",
    setShow2:()=>{},
    show3:"default",
    setShow3:()=>{},
    show4:"default",
    setShow4:()=>{},
    show5:"default",
    setShow5:()=>{},
    show6:"default",
    setShow6:()=>{},
    status:{},
    setStatus:()=>{},
}

const MyContext = createContext(initialStates);

export default function AppProvider({children}){
    //children all the pages/components insider this provider
    const [theme,setTheme]=useState(initialStates.theme)
    const [order,setOrder]=useState(initialStates.order)
    const [readlist,setReadlist]=useState(initialStates.readlist)
    const [favlist,setFavlist]=useState(initialStates.favlist)
    const [user,setUser]=useState(initialStates.user)
    const [show,setShow]=useState(initialStates.show)
    const [show2,setShow2]=useState(initialStates.show2)
    const [show3,setShow3]=useState(initialStates.show3)
    const [show4,setShow4]=useState(initialStates.show4)
    const [show5,setShow5]=useState(initialStates.show5)
    const [show6,setShow6]=useState(initialStates.show6)
    const [status,setStatus]=useState(initialStates.status)

    console.log("readlist",readlist)
    console.log("user",user)
    console.log("useOrder",order)
    console.log("useFav",favlist)

    //put in the variables you want to share
    return <MyContext.Provider value={{theme,setTheme, order,setOrder,readlist,setReadlist,
    user,setUser,show,setShow,status,setStatus,show2,setShow2,show3,setShow3,show4,setShow4
    ,show5,setShow5,show6,setShow6,favlist,setFavlist}}>
    <style jsx global>{`
    body{
        background-color:${global_theme[theme].body}
    }

    `}</style>
    
     {children}
 </MyContext.Provider>
}

//use the Context to create Hooks like useTheme
export function useTheme(){
    const {theme,setTheme} = useContext(MyContext)

    return {theme,setTheme}
}
export function useShow(){
    const {show,setShow} = useContext(MyContext)

    return {show,setShow}
}
export function useShow2(){
    const {show2,setShow2} = useContext(MyContext)

    return {show2,setShow2}
}
export function useShow3(){
    const {show3,setShow3} = useContext(MyContext)
    return {show3,setShow3}
}
export function useShow4(){
    const {show4,setShow4} = useContext(MyContext)
    return {show4,setShow4}
}

export function useShow5(){
    const {show5,setShow5} = useContext(MyContext)
    return {show5,setShow5}
}
export function useShow6(){
    const {show6,setShow6} = useContext(MyContext)
    return {show6,setShow6}
}

export function useOrder(){
    const {order,setOrder} = useContext(MyContext)

    return {order,setOrder}
}

export function useRead(){

    const {readlist,setReadlist}=useContext(MyContext)
    return{readlist,setReadlist};
}
export function useFav(){

    const {favlist,setFavlist}=useContext(MyContext)
    return{favlist,setFavlist};
}
export function useUser(){

    const {user,setUser}=useContext(MyContext)
    return{user,setUser};
}