import React from "react";
import Icon from "./Icon";
import { header_theme, text_theme } from '../utils/variables'
import { useTheme } from '../utils/provider'
import { Router } from "next/router";
import { useRouter } from "next/router";
import { Input } from 'semantic-ui-react'


const Nav = ({
    text = 'Setting',
}) => {

    const { theme } = useTheme();
    const router = useRouter()
    return (
        <div className="navBar" BGC={header_theme[theme].label}>
            <div className="navLogoCon">
                Echo
            </div>

            <div className="navInputCon">

                <Input />
                <Input />
            </div>

            <div color={text_theme[theme].label} onClick={() => router.push('/books')}>{text}</div>

        </div>
    )
}


export default Nav