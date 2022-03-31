import { Input,Icon } from 'semantic-ui-react'
import React,{useState} from "react";
import {header_theme, text_theme} from'../utils/variables'
import {useTheme} from '../utils/provider'



const InputBox = ({
    text = 'Account :',
    placeholder,
    onChange=()=>{},
    value,
    type,
    iconName,
    onClick=()=>{}
}) => {
    
    const {theme} = useTheme();
    // const getValue=(input)=>{
    //     console.log(input.target.value)
       
    // }
    return <div className='inputCon'>
            
                <p style={{color:text_theme[theme].title}}> {text}</p>
                <Input   icon onClick={onClick}
                 className='input' onChange={onChange} value={value} placeholder={placeholder} type={type} >
                       <input />
<Icon name={iconName} />
                </Input>
        </div>
  
}



export default InputBox