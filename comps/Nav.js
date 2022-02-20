import React from "react";
import { header_theme, text_theme } from '../utils/variables'
import { useTheme } from '../utils/provider'
import { Router } from "next/router";
import { useRouter } from "next/router";
import { Input } from 'semantic-ui-react'
import Logo from "./Logo";
import NavLogo from "./NavLogo";
import { Icon } from 'semantic-ui-react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const Nav = ({
    users = 'Guest',
}) => {

    const { theme } = useTheme();
    const router = useRouter()
    const top100Films = [
        { label: 'Author' },
        { label: 'ISBN' },
        
      ];
    return (
        
        <div className="navBar" BGC={header_theme[theme].label}>
            <div className="navLogoCon  " onClick={()=>router.push("/bookShelf")}>
                <NavLogo  className="lightColor " />
                
            </div>

            <div className="navInputCon">

            <input   className="input"  placeholder='Search...'  />
            
            <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 100, background:"#cad2c5", borderRadius:1.5 }}
      renderInput={(params) => <TextField {...params} label="filiter" />}
    />
            </div>
            <div className="navUsers ">
               Hello~ {users}
            </div>
            <div className="iconCon">

            <Icon name='user' size='large' onClick={()=>router.push("/personalSite")}/>
            <Icon name='setting' size='large'onClick={()=>router.push("/setting")} />
            </div>
           <div>

           </div>

        </div>
    )
}


export default Nav