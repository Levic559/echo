import React, { useState } from 'react'

const SwitchBasic = ({
    switchText='Label',
    switchHandler=()=>{},
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
                className={ status? 'switch-body switch-body-on' :'switch-body'}
            >
                <div className='switch-btn'></div>
            </div>
            <div className='switch-status'>
                {status? 'On' : 'Off'}
            </div>
        </div>
    )
}

export default SwitchBasic