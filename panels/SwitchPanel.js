import React from 'react'
import SwitchBasic from '@/comps/SwitchBasic'

const SwitchPanel = () => {

    const handleSwitch = () => {
        console.log('Switch work')
    }

    return (
    

        <div className='panel-wrapper'>
            <SwitchBasic switchText='Mode' switchHandler={handleSwitch}/>
            <SwitchBasic switchText='Descendant' switchHandler={handleSwitch}/>
            <SwitchBasic switchText='Private' switchHandler={handleSwitch}/>
            <SwitchBasic switchText='Personal Info' switchHandler={handleSwitch}/>
            <SwitchBasic switchText='Favorite Book' switchHandler={handleSwitch}/>
            <SwitchBasic switchText='Friends' switchHandler={handleSwitch}/>
            <SwitchBasic switchText='Clubs' switchHandler={handleSwitch}/>
        </div>
    )
}

export default SwitchPanel