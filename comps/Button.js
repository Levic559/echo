import { Button } from 'semantic-ui-react'
import React from "react";
import {useRouter} from 'next/router';

const MyButton =({
text='book',
onClick=()=>{}

})=>{
    const router = useRouter();
return(
<Button className='myButton' onClick={onClick}> <p>{text}</p></Button>
)
}



export default MyButton