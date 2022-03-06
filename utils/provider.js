import {useContext, createContext, useState} from 'react';
import {global_theme} from './variables'

//the variables you want to provide to all the pages/components wrapped around this provider
const initialStates = {
    theme:"default",
    setTheme:()=>{},
    order:"asc",
    setOrder:()=>{},
    readlist:{},
    setReadlist:()=>{}
}

const MyContext = createContext(initialStates);

export default function AppProvider({children}){
    //children all the pages/components insider this provider
    const [theme,setTheme]=useState(initialStates.theme)
    const [order,setOrder]=useState(initialStates.order)
    const [readlist,setReadlist]=useState(initialStates.readlist)
    console.log("readlist",readlist)
    //put in the variables you want to share
    return <MyContext.Provider value={{theme,setTheme, order,setOrder,readlist,setReadlist}}>
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