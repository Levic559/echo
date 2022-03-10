import { Input } from 'semantic-ui-react'
import React,{useState} from "react";
import {header_theme, text_theme} from'../utils/variables'
import {useTheme} from '../utils/provider'



const InputBox = ({
    text = 'Account :',
    placeholder,
    onChange=()=>{}
}) => {
    
    const {theme} = useTheme();
    // const getValue=(input)=>{
    //     console.log(input.target.value)
       
    // }
    return <div className='inputCon'>
            
                <p style={{color:text_theme[theme].title}}> {text}</p>
                <Input className='input' onChange={onChange} placeholder={placeholder} />
        </div>
  
}



export default InputBox