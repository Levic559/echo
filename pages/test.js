import React from 'react'
import SwitchPanel from '@/panels/SwitchPanel'
import SearchBar from '@/comps/SearchBar'

const test = () => {
  return (
    <div style={{
        width: '100%',
        padding: '5%',
    }}>
        <SwitchPanel/>
        <SearchBar/>
    </div>
  )
}

export default test