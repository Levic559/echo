import React, { useState } from 'react'

const SwitchBasic = ({
    switchText='Label',
    switchHandler=()=>{},
    btn="on",
    slideColor="switch-body switch-body-on"
}) => {

    const [status, setStatus] = useState(false)

    const clickHandler =()=> {
        setStatus(!status)
        switchHandler()
    }

    return (
        <div className='switch-basic'>
            <div>{switchText}</div>
            <div 
                onClick={clickHandler}
                // className={ status? 'switch-body switch-body-on' :'switch-body'}
                className={ slideColor}
            >
                <div className='switch-btn'></div>
            </div>
            <div className='switch-status'>
                {btn}
            </div>
        </div>
    )
}

export default SwitchBasic