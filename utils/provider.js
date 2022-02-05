import {useContext, createContext, useState} from 'react';
import {global_theme} from './variables'

//the variables you want to provide to all the pages/components wrapped around this provider
const initialStates = {
    theme:"default",
    setTheme:()=>{},
    order:"asc",
    setOrder:()=>{},
    code:"eng",
    setCode:()=>{},
    rc:"1000",
    setRC:()=>{},
}

const MyContext = createContext(initialStates);

export default function AppProvider({children}){
    //children all the pages/components insider this provider
    const [theme,setTheme]=useState(initialStates.theme)
    const [order,setOrder]=useState(initialStates.order)
    const [code,setCode]=useState(initialStates.code)
    const [rc,setRC]=useState(initialStates.rc)
    //put in the variables you want to share
    return <MyContext.Provider value={{theme,setTheme, order,setOrder,code,setCode,rc,setRC}}>
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

export function useCode(){
    const {code,setCode} = useContext(MyContext)

    return {code,setCode}
}

export function useRC(){
    const {rc,setRC} = useContext(MyContext)

    return {rc,setRC}
}