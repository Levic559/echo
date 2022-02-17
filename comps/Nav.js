import React from "react";
import { header_theme, text_theme } from '../utils/variables'
import { useTheme } from '../utils/provider'
import { Router } from "next/router";
import { useRouter } from "next/router";
import { Input } from 'semantic-ui-react'
import Logo from "./Logo";
import NavLogo from "./NavLogo";
import { Icon } from 'semantic-ui-react'

const Nav = ({
    users = 'Guest',
}) => {

    const { theme } = useTheme();
    const router = useRouter()
    return (
        <div className="navBar" BGC={header_theme[theme].label}>
            <div className="navLogoCon  ">
                <NavLogo  className="lightColor "/>
                
            </div>

            <div className="navInputCon">

            <Input   className="navInput"  placeholder='Search...' />
            <Input className="navInput" placeholder='Search...' />
            </div>
            <div className="navUsers ">
               Hello~ {users}
            </div>
            <div className="iconCon">

            <Icon name='user' size='large' onClick={()=>router.push("/setting")}/>
            <Icon name='setting' size='large'onClick={()=>router.push("/Personal site")} />
            </div>
           <div>

           </div>

        </div>
    )
}


export default Nav