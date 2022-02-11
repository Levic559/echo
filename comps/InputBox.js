import { Input } from 'semantic-ui-react'
import React from "react";




const InputBox = ({
    text = 'Account :',


}) => {


    return <div className='inputCon'>
            
                <p> {text}</p>
                <Input className='input' />
        </div>
  
}



export default InputBox