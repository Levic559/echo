import { Button } from 'semantic-ui-react'
import React from "react";
import {useRouter} from 'next/router';

const MyButton =({
text='book',
routeTo =  "/"

})=>{
    const router = useRouter();
return(
<Button className='button' onClick={() => router.push(routeTo)}> <p>{text}</p></Button>
)
}



export default MyButton