import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'

const IconBut = ({
    iconName,
    onClick=()=>{}
}) => {

    
    return (
        <div className='bookmark outline' onClick={onClick}>
          <Icon name={iconName} size='large' />
        </div>
    )
}

export default IconBut