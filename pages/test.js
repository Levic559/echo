import React from 'react'
import SwitchPanel from '@/panels/SwitchPanel'
import SearchBar from '@/comps/SearchBar'

import DropMenu from '@/comps/DropMenu'
const test = () => {
  return (
    <div style={{
        width: '100%',
        padding: '5%',
    }}>
        <SwitchPanel/>
        <SearchBar/>

        <DropMenu />
    </div>
  )
}

export default test