import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'

const HeartBut = ({
    iconName,
    onClick=()=>{}
}) => {

    
    return (
        <div className='HeartBut' onClick={onClick}>
          <Icon name={iconName} size='large' />
        </div>
    )
}

export default HeartBut