import { Input, Label } from 'semantic-ui-react'
import React from "react";


const InputBox =({
text='Account :',


})=>{
    
   
return<div> 

<Label> {text}</Label>
<Input style={{width:'15rem', borderRadius:'.5rem'}} /> 
    </div>
}



export default InputBox