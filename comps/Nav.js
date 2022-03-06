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
import {global_theme} from'../utils/variables'
const Nav = ({
    users = 'Guest',
    onChange=()=>{},
    onClick=()=>{},
    options,
    value,
    onValueChange=()=>{},
    placeholder
}) => {

    const { theme } = useTheme();
    const router = useRouter()
    const filter = [
        { label: 'BookTitle' },
        { label: 'Author' },
        { label: 'ISBN' },
        { label: 'Year_Publish' }
      ];
    return (

        <div className="navBar" style={{background:global_theme[theme].body }} >
            <div className="navLogoCon  " onClick={() => router.push("/bookShelf")}>
                <NavLogo className="lightColor "  />
            </div>
            <div className="navInputCon">
                <input className="input" placeholder={placeholder} onChange={onChange} onClick={onClick} />
                <Autocomplete
                value={value}
                onChange={onValueChange}
                    disablePortal
                    id="combo-box-demo"
                    options={filter}
                    sx={{ width: 165, background: "#cad2c5", borderRadius: 1.5}}
                    renderInput={(params) => <TextField {...params} label="filter" /> }
                    
                />
            </div>
            <div className="navUsers " style={{color:text_theme[theme].title}}>
                Hello~ {users}
            </div>
            <div className="iconCon">

                <Icon name='user' size='large' onClick={() => router.push("/personalSite")} style={{color:text_theme[theme].title}}/>
                <Icon name='setting' size='large' onClick={() => router.push("/setting")} style={{color:text_theme[theme].title}}/>
            </div>
            <div>

            </div>

        </div>
    )
}


export default Nav