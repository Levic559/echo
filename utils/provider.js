import {useContext, createContext, useState} from 'react';
import {global_theme} from './variables'

//the variables you want to provide to all the pages/components wrapped around this provider
const initialStates = {
    theme:"default",
    setTheme:()=>{},
    order:"asc",
    setOrder:()=>{},
    readlist:{},
    setReadlist:()=>{},
    user:{},
    setUser:()=>{}
}

const MyContext = createContext(initialStates);

export default function AppProvider({children}){
    //children all the pages/components insider this provider
    const [theme,setTheme]=useState(initialStates.theme)
    const [order,setOrder]=useState(initialStates.order)
    const [readlist,setReadlist]=useState(initialStates.readlist)
    const [user,setUser]=useState(initialStates.user)
    console.log("readlist",readlist)
    console.log("user",user)

    //put in the variables you want to share
    return <MyContext.Provider value={{theme,setTheme, order,setOrder,readlist,setReadlist,user,setUser}}>
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


export function useOrder(){
    const {order,setOrder} = useContext(MyContext)

    return {order,setOrder}
}

export function useRead(){

    const {readlist,setReadlist}=useContext(MyContext)
    return{readlist,setReadlist};
}

export function useUser(){

    const {user,setUser}=useContext(MyContext)
    return{user,setUser};
}