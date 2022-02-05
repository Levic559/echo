import { Button } from 'semantic-ui-react'
import React from "react";
import {useRouter} from 'next/router';

const MyButton =({
text='book',
routeTo =  "/"

})=>{
    const router = useRouter();
return(
<Button style={{width:'10rem', borderRadius:'.5rem'}} onClick={() => router.push(routeTo)}> {text}</Button>
)
}



export default MyButton